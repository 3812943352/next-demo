/**
 * @Author: wangbo 3812943352@qq.com
 * @Date: 2024-12-26 16:55:55
 * @LastEditors: wangbo 3812943352@qq.com
 * @LastEditTime: 2024-12-27 10:47:41
 * @FilePath: src/pages/demo1/index.tsx
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

import React from "react";
import "./index.scss";
import gsap from "gsap";
const View: React.FC = () => {
  const green = React.useRef<HTMLDivElement>(null);
  const purple = React.useRef<HTMLDivElement>(null);
  const blue = React.useRef<HTMLDivElement>(null);
  // target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second.
  gsap.to(green.current, { rotation: 360, x: 100, duration: 1 });

  // target the element with a class of "purple" - rotate and move FROM 100px to the left over the course of 1 second.
  gsap.from(purple.current, { rotation: -360, x: -100, duration: 1 });

  // target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second.
  gsap.fromTo(
    blue.current,
    { x: -100 },
    { rotation: 360, x: 100, duration: 1 },
  );
  return (
    <div className={"h-lvh w-lvw bg-black"}>
      <div ref={green} className="box gradient-green green h-16 w-16"></div>
      <div ref={purple} className="box gradient-purple purple"></div>
      <div ref={blue} className="box gradient-blue blue"></div>
    </div>
  );
};

export default View;
