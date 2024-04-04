type Hero = {
  title: string;
  description: string;
  thumbnail: string;
  sub_title?: string;
};

type Opsi = {
  label: string;
  status: boolean;
  sub_label: string;
};

type Mapel = {
  thumbnail: string;
  opsi: Opsi[];
};

type Price = {
  pendidikan: string;
  min_price: number;
  max_price: number;
};

type Ketentuan = {
  description: string;
};

export type DataProgBelPage = {
  id: number;
  type: string;
  slug: string;
  hero: Hero;
  mapel: Mapel;
};

export type DataSistemBelajar = {
  id: number;
  title: string;
  description: string;
};

export type DataFaq = {
  id: number;
  question: string;
  answer: string;
};

export type DataPakBelPage = {
  id: number;
  slug: string;
  title: string;
  hero: Hero;
  price: Price[];
  ketentuan: Ketentuan[];
};
