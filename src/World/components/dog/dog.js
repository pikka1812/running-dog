import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadDog() {
    const loader = new GLTFLoader();
    const cheesecake = await loader.loadAsync('./src/assets/models/dog.glb');

    console.log('Squaaawk!', cheesecake);

    const cheesecakeModel = setupModel(cheesecake);
    cheesecakeModel.position.set(0,-20,30);

    return { cheesecakeModel }
}
    
export { loadDog };
