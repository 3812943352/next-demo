/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2024-12-26 10:05:05
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2024-12-26 10:21:55
 * @FilePath: src/ThreeHelper/shader/nightCity/NightCityShader.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";
import { ShaderMaterial, Vector2 } from "three";

export const NightCityShader = new ShaderMaterial({
  uniforms: {
    iTime: { value: 0 },
    // 分辨率就是THREE元素的大小
    iResolution: {
      value: new Vector2(1, 1),
    },
  },
  defines: {
    // 快速
    // FAST_DESCENT: true,
    // 黑白滤镜
    // BLACK_AND_WHITE: true,
  },
  // transparent: true,
  vertexShader,
  fragmentShader,
});

// NightCityShader.updateUniforms = function (key: string, val: any) {
//   this.uniforms[key] = { value: val };
// };
