import { createSlice } from "@reduxjs/toolkit";
import endPointAPI from "@/utils/endpoint";
import { toast } from "sonner";
import { Dispatch } from "redux";
import { NavigateFunction } from "react-router-dom";

const initialState = {
  userData: {},
  items: [],
  modalEditProfile: true,
  modalChangeStatus: false,
};

export const userSlice = createSlice({
  name: "article",
  initialState: initialState,
  reducers: {
    setArticleItems: (state, action) => {
      state.items = action.payload.items;
    },
    setUserLogout: () => {
      localStorage.clear();
    },
    setModalEditProfile: (state) => {
      state.modalEditProfile = !state.modalEditProfile;
    },
    setModalChangeStatus: (state) => {
      state.modalChangeStatus = !state.modalChangeStatus;
    },
  },
});

export const {
  setArticleItems,
  setUserLogout,
  setModalChangeStatus,
  setModalEditProfile,
} = userSlice.actions;
export default userSlice.reducer;

interface User {
  id: number;
  full_name: string;
  email: string;
  role: string;
  profile_picture: string;
  status: string;
}

//@ts-ignore
interface Article {
  id: number;
  title: string;
  body: string;
  description: string;
  thumbnail: string;
  thumbnail_id: string;
  UserId: User;
}

interface ArticlePayload {
  title: string;
  description: string;
  body: string;
  thumbnail?: File | any;
}

interface ResponseGet {
  message: string;
  data: User;
}

export const articleCreate =
  (payload: ArticlePayload, navigate: NavigateFunction) =>
  async (dispatch: Dispatch) => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      toast.info(`Process Creating your Article`);
      await endPointAPI.post<ResponseGet>("/article/", payload, config);
      // @ts-ignore
      dispatch(getAllArticles());
      toast.success(`Create Article Success for ${payload.title}`);
      navigate("/articles");
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };

export const getAllArticles =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const { data } = await endPointAPI.get<any>(
        "/article/?page=1&limit=100&search=",
        config
      );
      dispatch(setArticleItems(data.data));
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };

export const getArticlesById =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const { data } = await endPointAPI.get<any>(
        "/article/?page=1&limit=100&search=",
        config
      );
      dispatch(setArticleItems(data.data));
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };

export const articleChangeStatus =
  (status: string, id: number, _navigate: NavigateFunction, title: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      await endPointAPI.patch<any>(
        "/article/article-status/" + id,
        { status },
        config
      );
      //@ts-ignore
      await dispatch(getAllArticles());
      toast.success(`Change Status Success for Article ${title}`);
      // navigate(0);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };

export const articleDelete =
  (id: number, title: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      await endPointAPI.delete<any>("/article/" + id, config);
      // @ts-ignore
      await dispatch(getAllArticles());
      toast.success(`Delete Success for Article "${title}"`);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };

export const articleUpdate =
  (payload: ArticlePayload, navigate: NavigateFunction, id: number) =>
  async (dispatch: Dispatch): Promise<void> => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      toast.info(`Processing Update Your Article`);
      await endPointAPI.put<any>("/article/" + id, payload, config);
      // @ts-ignore
      await dispatch(getAllArticles());
      toast.success(`Update Success for Article "${payload.title}"`);
      navigate("/articles");
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };
