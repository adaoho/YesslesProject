import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface statusesProps {
  value: string;
  label: string;
  icon: React.ComponentType;
}

export interface UserProps {
  id: number;
  full_name: string;
  email: string;
  role: string;
  profile_picture: string;
  profile_picture_id: string;
}

export interface ArticleProps {
  id: number;
  title: string;
  body: string;
  slug: string;
  thumbnail: string;
  thumbnail_id: string;
  description: string;
  UserId: number;
  status: string;
  User: UserProps;
}
