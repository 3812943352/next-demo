/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2024-11-20 16:36:35
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2024-12-26 10:20:00
 * @FilePath: src/ThreeHelper/expand/UseTaiJIPictureMaterial/material.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

import vertexShader from "./vt.glsl";
import fragmentShader from "./fm.glsl";
import { ShaderMaterial, TextureLoader } from "three";

export class UseTaiJIPictureMaterial extends ShaderMaterial {
  load = () => {};

  constructor() {
    const uniforms = {
      diffTexture: {
        value: new TextureLoader().load("/textures/taiji.jpg", () => {
          this.load();
        }),
      },
    };

    super({
      vertexShader,
      fragmentShader,
      uniforms,
    });
  }
}
