/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2024-12-26 10:05:05
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2024-12-26 10:21:55
 * @FilePath: src/ThreeHelper/shader/water/WaterMaterial.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
/*
 * @Author: hongbin
 * @Date: 2023-01-25 15:36:57
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2024-12-26 10:21:55
 * @Description:噪音材质
 */
import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";
import { ShaderMaterial, Vector2 } from "three";

/**
 * 水波材质
 */
export const WaterShaderMaterial = new ShaderMaterial({
  uniforms: {
    vTime: { value: 0 },
    iResolution: {
      value: new Vector2(1, 1),
    },
  },
  defines: {
    TAU: 6.28318530718,
    MAX_ITER: 5,
  },
  // blending: AdditiveBlending,
  transparent: true,
  vertexShader,
  fragmentShader,
});

// WaterShaderMaterial.updateUniforms = function (key: string, val: any) {
//     this.uniforms[key] = { value: val };
// };
