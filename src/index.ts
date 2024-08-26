import { Manager } from './Manager';
import { LoaderScene } from './scenes/LoaderScene';

Manager.initialize(430, 932, 0x6495ed);

// We no longer need to tell the scene the size because we can ask Manager!
const loady: LoaderScene = new LoaderScene();
Manager.changeScene(loady);