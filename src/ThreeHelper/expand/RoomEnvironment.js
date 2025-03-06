/*
 * @Author: hongbin
 * @Date: 2023-06-11 22:14:58
 * @LastEditors: hongbin
 * @LastEditTime: 2023-06-13 11:28:26
 * @Description: 自定义环境
 */
/**
 * https://github.com/google/model-viewer/blob/master/packages/model-viewer/src/three-components/EnvironmentScene.ts
 */

import {
	BackSide,
	BoxGeometry,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	PointLight,
	Scene,
	PlaneGeometry
} from 'three';
import { TaiJiMaterial } from "../../shader/TaiJiMaterial/material";
import { BaGuaMaterial } from "../../shader/BaGuaMaterial/material";
import { UseTaiJIPictureMaterial } from "./UseTaiJIPictureMaterial/material";



class RoomEnvironment extends Scene {
	load = () => { }

	constructor() {

		super();

		const geometry = new BoxGeometry();
		geometry.deleteAttribute('uv');

		const roomMaterial = new MeshStandardMaterial({ side: BackSide });
		const boxMaterial = new MeshStandardMaterial();

		const mainLight = new PointLight(0xffffff, 2.0, 28, 2);
		mainLight.position.set(0.418, 10.199, 0.300);
		this.add(mainLight);

		const room = new Mesh(geometry, roomMaterial);
		room.position.set(- 0.757, 13.219, 0.717);
		room.scale.set(31.713, 28.305, 28.591);
		this.add(room);

		const box1 = new Mesh(geometry, boxMaterial);
		box1.position.set(- 10.906, 2.009, 1.846);
		box1.rotation.set(0, - 0.195, 0);
		box1.scale.set(2.328, 7.905, 4.651);
		this.add(box1);

		const box2 = new Mesh(geometry, boxMaterial);
		box2.position.set(- 5.607, - 0.754, - 0.758);
		box2.rotation.set(0, 0.994, 0);
		box2.scale.set(1.970, 1.534, 3.955);
		this.add(box2);

		const BaGua = new BaGuaMaterial({})
		this.BaGua = BaGua;
		const plane = new Mesh(
			new PlaneGeometry(10, 10),
			BaGua
		);
		plane.position.set(0, 5, - 13);
		// plane.rotateX(Math.PI / -2);
		this.add(plane);
		// {
		// 	const TaiJi = new TaiJiMaterial({})
		// 	this.TaiJi = TaiJi;
		// 	const plane = new Mesh(
		// 		new PlaneGeometry(6, 6),
		// 		TaiJi
		// 	);
		// 	plane.position.set(0, 5, - 13);
		// 	TaiJi.uniforms.iTime.value = 2
		// 	this.add(plane);
		// }
		{
			const material = new UseTaiJIPictureMaterial()
			material.load = () => {
				this.load()
			}
			const plane = new Mesh(
				new PlaneGeometry(6, 6),
				material
			);
			plane.position.set(0, 5, - 13);
			this.add(plane);
		}

	}

	dispose() {

		const resources = new Set();

		this.traverse((object) => {

			if (object.isMesh) {

				resources.add(object.geometry);
				resources.add(object.material);

			}

		});

		for (const resource of resources) {

			resource.dispose();

		}

	}

}

function createAreaLightMaterial(intensity) {

	const material = new MeshBasicMaterial();
	material.color.setScalar(intensity);
	return material;

}

export { RoomEnvironment };
