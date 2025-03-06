import { NextRequest } from "next/server";
import { AuthMiddleware } from "@/middleware/auth";

/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2025-01-02 16:06:59
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2025-01-03 11:33:10
 * @FilePath: src/middleware.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
export const middleware = async (req: NextRequest) => {
  return AuthMiddleware(req);
};

export const config = {
  matcher: ["/((?!_next|_apis|favicon.ico).*)"],
};
