import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import articleSlice from "../features/article/articleSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  user: userSlice,
  article: articleSlice,
});

//@ts-ignore
const rootReducer = (state, action) => {
  if (action.type === "user/setUserLogout") {
    state = undefined;
  }

  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
