export type Response<T> = {
  StatusCode?: number;
  Message?: string;
  data?: T;
};

export type DataProgramBelajar = {
  pendidikan: string;
  thumbnail: string;
  priceStart: number;
  durasiBelajar: number;
  icon: string;
  tm: number;
  alias: string;
  type: string;
  matapelajaran: number;
};

export type DataTestimoni = {
  title: string;
  comment: string;
  name: string;
  position: string;
  rating: number;
  image: string;
};

export type DataArtikel = {
  id: string;
  title: string;
  publication_date: string;
  author: string;
  authorProfile: string;
  content: string;
  thumbnail: string;
};

export type DataClass = {
  label: string;
  icon: string;
};

export type DataClassType = {
  title: string;
  class: DataClass[];
};

export type DataProgramNavbar = {
  type_name: string;
  type: DataClassType[];
};

export type ResponseData = {
  Program_Belajar: DataProgramBelajar[];
  Paket_Belajar: DataProgramBelajar[];
};
