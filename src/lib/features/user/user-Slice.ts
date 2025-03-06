/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2025-01-03 08:46:03
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2025-01-03 11:06:44
 * @FilePath: src/lib/features/user/user-Slice.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  token: string | null;
  userId: string | null;
  cap: string | null;
  sms: string | null;
}

const initialState: CounterState = {
  token: null,
  userId: null,
  cap: null,
  sms: null,
};

// 重点看这一部分
export const userSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    setUserId: (state, action: PayloadAction<string | null>) => {
      state.userId = action.payload;
    },
    clearUserId: (state) => {
      state.userId = null;
    },
    setCap: (state, action: PayloadAction<string | null>) => {
      state.cap = action.payload;
    },
    clearCap: (state) => {
      state.cap = null;
    },
    setSms: (state, action: PayloadAction<string | null>) => {
      state.sms = action.payload;
    },
    clearSms: (state) => {
      state.sms = null;
    },
    clearUserInfo: (state) => {
      state.token = null;
      state.userId = null;
      state.cap = null;
      state.sms = null;
    },
  },
});
export const {
  setToken,
  clearToken,
  setUserId,
  clearUserId,
  clearUserInfo,
  setCap,
  clearCap,
  setSms,
  clearSms,
} = userSlice.actions;
export default userSlice.reducer;
