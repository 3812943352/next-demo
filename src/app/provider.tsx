/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2025-01-03 11:21:23
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2025-01-03 11:21:57
 * @FilePath: src/app/provider.tsx
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
"use client";

import { PropsWithChildren } from "react";

import ReduxProvider from "../lib/redux-provider";

export default function Providers({ children }: PropsWithChildren<any>) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
