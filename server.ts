/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2025-01-02 17:07:01
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2025-01-02 17:14:28
 * @FilePath: server.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
import express from "express";
import next from "next";
import { createProxyMiddleware } from "http-proxy-middleware";

const port = 3000;
const dev = process.env.NEXT_PUBLIC_APP_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const proxyTable = {
  "/api": {
    target: process.env.NEXT_PUBLIC_API_URL,
    pathRewrite: {
      "^/api": "",
    },
    changeOrigin: true,
  },
};

app.prepare().then(() => {
  const server = express();

  // 如果是开发环境，则代理接口
  if (dev) {
    server.use("/api", createProxyMiddleware(proxyTable["/api"]));
  }

  // 托管所有请求
  server.all("*", (req, res) => {
    return handle(req, res);
  });
});
