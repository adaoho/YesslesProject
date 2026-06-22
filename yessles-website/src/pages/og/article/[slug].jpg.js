// Build-time generated Open Graph image per article (1200x630, consistent
// aspect ratio) with the Yessles logo overlaid on a white badge — so every
// shared article link shows a uniform, branded thumbnail even when the
// uploaded image has no logo or a different ratio.
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { endPoint } from "@/utils/Endpoint";

const WIDTH = 1200;
const HEIGHT = 630;

const logoPath = fileURLToPath(new URL("../../../../public/yessles_logo.png", import.meta.url));
const fallbackPath = fileURLToPath(new URL("../../../../public/background_utama.jpeg", import.meta.url));

export async function getStaticPaths() {
  try {
    const res = await fetch(`${endPoint}/article/article-active?page=1&limit=100&search=`);
    const data = await res.json();
    const items = data?.data?.items ?? [];
    return items.map((item) => ({ params: { slug: item.slug }, props: { thumbnail: item.thumbnail } }));
  } catch {
    return [];
  }
}

export async function GET({ props }) {
  // cropped to a consistent 1200x630.
  let baseInput;
  try {
    const res = await fetch(props?.thumbnail);
    if (!res.ok) throw new Error("bad status");
    baseInput = Buffer.from(await res.arrayBuffer());
  } catch {
    baseInput = readFileSync(fallbackPath);
  }

  const base = sharp(baseInput).resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" });

  // Bottom gradient scrim so the white badge always stays legible.
  const scrim = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.5"/></linearGradient></defs><rect width="${WIDTH}" height="${HEIGHT}" fill="url(#g)"/></svg>`
  );

  // White rounded badge with the logo centered inside.
  const logo = await sharp(readFileSync(logoPath)).resize({ height: 64 }).png().toBuffer();
  const logoMeta = await sharp(logo).metadata();
  const padX = 36;
  const padY = 28;
  const badgeW = (logoMeta.width ?? 245) + padX * 2;
  const badgeH = 64 + padY * 2;
  const badgeBg = Buffer.from(
    `<svg width="${badgeW}" height="${badgeH}"><rect width="${badgeW}" height="${badgeH}" rx="${Math.round(
      badgeH / 2
    )}" fill="#ffffff"/></svg>`
  );
  const badge = await sharp(badgeBg)
    .composite([{ input: logo, gravity: "centre" }])
    .png()
    .toBuffer();

  const out = await base
    .composite([
      { input: scrim, top: 0, left: 0 },
      { input: badge, top: HEIGHT - badgeH - 56, left: 56 },
    ])
    .jpeg({ quality: 86 })
    .toBuffer();

  return new Response(out, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
