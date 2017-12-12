import ShapeCreator from "./ShapeCreator";
import {ENEMY_OPTIONS} from "./Constants";

export default class Enemy extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();

        const plane=new THREE.ObjectLoader();
        plane.load( ENEMY_OPTIONS.link, ( obj ) => {
            this.mesh.add(obj);
        });
    }

    setRandomPosition() {
        let xpos = -13+Math.random()*(26);//-3.4+Math.random()*(6.8);
        let ypos = 30+Math.random()*(3);//31+Math.random()*(1.5);
        let zpos = -10.5+Math.random()*(21);//-5.5+Math.random()*(5.5);

        this.mesh.position.x = xpos;//2
        this.mesh.position.y = ypos;//31
        this.mesh.position.z = zpos;//2
    }

    setRotationSpeed() {//rotationSpeed
        this.rotationSpeed = Math.random()/10;
    }

    rotate() {
        this.mesh.rotation.z += this.rotationSpeed;//ASTEROID_OPTIONS.rotationSpeed;
    }

    step(z) {
        this.mesh.position.z += z;//2
    }
}
