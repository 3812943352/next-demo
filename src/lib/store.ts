/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2025-01-03 08:52:20
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2025-01-03 11:20:11
 * @FilePath: src/lib/store.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/user/user-Slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"] // 指定需要持久化的reducer
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    userReducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
