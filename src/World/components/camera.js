import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  camera.position.set(-70, 20, 40);

  return camera;
}

export { createCamera };
