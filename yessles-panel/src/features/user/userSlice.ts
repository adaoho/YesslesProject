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
  name: "user",
  initialState: initialState,
  reducers: {
    setUserData: (state, action) => {
      const user = action.payload.data;
      state.userData = user;
    },
    setUserItems: (state, action) => {
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
  setUserData,
  setUserItems,
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

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  full_name: string;
}

interface LoginResponse {
  message: string;
  data: {
    role: string;
    access_token: string;
    data: User;
  };
}

interface RegisterResponse {
  message: string;
  data: User;
}

export const userLogin =
  (payload: LoginPayload, navigate: NavigateFunction) =>
  async (dispatch: Dispatch) => {
    try {
      toast("Getting User Information ...");
      const { data } = await endPointAPI.post<LoginResponse>(
        "/user/login",
        payload
      );
      localStorage.setItem("access_token", data.data.access_token);
      dispatch(setUserData(data.data));
      navigate("/");
      toast.success(`Login Success`);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

export const userRegister =
  (payload: RegisterPayload, navigate: NavigateFunction) =>
  async (_dispatch: Dispatch) => {
    try {
      await endPointAPI.post<RegisterResponse>("/user/register", payload);
      toast.success(`Register Success, Please Login`);
      navigate("/login");
    } catch (error) {
      toast.error(`Invalid Email or Password`);
    }
  };

export const userGetbyAdmin =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      const { data } = await endPointAPI.get<any>(
        "/user/get-user?page=1&limit=100&search=",
        config
      );
      dispatch(setUserItems(data.data));
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };

export const userChangeStatus =
  (status: string, id: number, _navigate: NavigateFunction, email: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      await endPointAPI.patch<any>(
        "/user/status-user/" + id,
        { status },
        config
      );
      //@ts-ignore
      await dispatch(userGetbyAdmin());
      toast.success(`Change Status Success for ${email}`);
      // navigate(0);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };

export const userChangeUpdate =
  (full_name: string, id: number, profile_picture: any, email: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      await endPointAPI.put<any>(
        "/user/edit-user/" + id,
        { profile_picture, full_name },
        config
      );
      // @ts-ignore
      await dispatch(userGetbyAdmin());
      toast.success(`Change Success for ${email}`);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };

export const userDelete =
  (id: number, email: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      await endPointAPI.delete<any>("/user/delete-user/" + id, config);
      // @ts-ignore
      await dispatch(userGetbyAdmin());
      toast.success(`Delete Success for ${email}`);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };
