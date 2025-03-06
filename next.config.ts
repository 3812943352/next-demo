/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2024-12-25 11:33:27
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2025-01-03 11:24:22
 * @FilePath: next.config.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
import type { NextConfig } from "next";
import path from "path";
const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    additionalData: `
      @use "variables";
      @use "mixins";
      @use "theme";
      @use "global";
    `,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.glb$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "file-loader",
        },
      ],
    });
    config.module.rules.push({
      test: /\.gltf$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "raw-loader",
        },
      ],
    });
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: [
    //     options.defaultLoaders.babel,
    //     {
    //       loader: "sass-loader",
    //     },
    //   ],
    // });
    config.resolve.extensions.push(".js");
    config.resolve.fallback = { fs: false };
    //
    config.resolve.alias.path = require.resolve("path-browserify");

    return config;
  },
};

export default nextConfig;
