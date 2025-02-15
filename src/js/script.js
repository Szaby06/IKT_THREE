import * as THREE from 'three';
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

camera.position.set(1,1,5)

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: "red"});
const box = new THREE.Mesh(boxGeometry,boxMaterial);
scene.add(box)
renderer.render(scene,camera);

