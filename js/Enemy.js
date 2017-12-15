import ShapeCreator from "./ShapeCreator";
import {ENEMY_OPTIONS} from "./Constants";

export default class Enemy extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
    }

    setRandomPosition() {
        let xpos = -13+Math.random()*(26);//-3.4+Math.random()*(6.8);
        let ypos = 29.5+Math.random()*(6);//31+Math.random()*(1.5);
        let zpos = -10.5+Math.random()*(20);//-5.5+Math.random()*(5.5);

        this.mesh.position.x = xpos;//2
        this.mesh.position.y = ypos;//31
        this.mesh.position.z = zpos;//2
    }
}
