import { NextRequest, NextResponse } from "next/server";
import path from "path";

/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2025-01-02 16:08:16
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2025-01-03 11:33:10
 * @FilePath: src/middleware/auth.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
export const AuthMiddleware = async (req: NextRequest) => {
  const whiteList = ["/login"];
  if (whiteList.some((path) => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", req.url));
};
