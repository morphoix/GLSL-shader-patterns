import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";

import vertexShader from "./shaders/test/vertex.glsl";
import fragment1 from "./shaders/test/fragment1.glsl";
import fragment2 from "./shaders/test/fragment2.glsl";
import fragment3 from "./shaders/test/fragment3.glsl";
import fragment4 from "./shaders/test/fragment4.glsl";
import fragment5 from "./shaders/test/fragment5.glsl";
import fragment6 from "./shaders/test/fragment6.glsl";
import fragment7 from "./shaders/test/fragment7.glsl";
import fragment8 from "./shaders/test/fragment8.glsl";
import fragment9 from "./shaders/test/fragment9.glsl";
import fragment10 from "./shaders/test/fragment10.glsl";
import fragment11 from "./shaders/test/fragment11.glsl";

const gui = new dat.GUI();
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);

function createShaderMaterial(fragmentShader) {
  return new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: THREE.DoubleSide,
  });
}

const material = createShaderMaterial(fragment1);

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

console.log(geometry.attributes.uv);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(0.25, -0.25, 1);
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const shaders = {
  vertex: createShaderMaterial(fragment1),
  shine: createShaderMaterial(fragment2),
  shadow: createShaderMaterial(fragment3),
  rough_shadow: createShaderMaterial(fragment4),
  gradient: createShaderMaterial(fragment5),
  stripes: createShaderMaterial(fragment6),
  gradient2: createShaderMaterial(fragment7),
  crosses: createShaderMaterial(fragment8),
  gradient3: createShaderMaterial(fragment9),
  dots: createShaderMaterial(fragment10),
  squares: createShaderMaterial(fragment11),
};

const guiOptions = {
  shader: fragment1,
};

gui
  .add(guiOptions, "Shader patterns", Object.keys(shaders))
  .onChange((value) => {
    mesh.material = shaders[value];
  });

const tick = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
