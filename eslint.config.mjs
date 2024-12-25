/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2024-12-25 11:33:27
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2024-12-25 13:40:32
 * @FilePath: eslint.config.mjs
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
