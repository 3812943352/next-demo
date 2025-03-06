/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2025-01-03 11:20:51
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2025-01-03 11:21:09
 * @FilePath: src/lib/redux-provider.tsx
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
"use client";

import { PropsWithChildren } from "react";

import { Provider } from "react-redux";
import { store } from "./store"; // tweak the path please

export default function ReduxProvider({ children }: PropsWithChildren<any>) {
  return <Provider store={store}>{children}</Provider>;
}
