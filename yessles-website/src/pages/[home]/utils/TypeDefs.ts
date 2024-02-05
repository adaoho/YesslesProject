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
};

export type DataTestimoni = {
  title: string;
  comment: string;
  name: string;
  position: string;
  rating: number;
  image: string;
};

export type ResponseData = {
  Program_Belajar: DataProgramBelajar[];
  Paket_Belajar: DataProgramBelajar[];
};
