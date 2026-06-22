// Ref-counted body scroll lock shared across overlays (mobile drawer, desktop
// dropdown). Using a shared counter avoids the classic dueling-lock bug where
// one overlay captures another's "hidden" state and restores it permanently.
// The body has no CSS overflow rule, so the released state is always empty.

let lockCount = 0;

export function lockBodyScroll() {
  lockCount += 1;
  if (lockCount === 1) {
    document.body.style.overflow = "hidden";
  }
}

export function unlockBodyScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount === 0) {
    document.body.style.overflow = "";
  }
}
