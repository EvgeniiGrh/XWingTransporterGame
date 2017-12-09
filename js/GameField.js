import ShapeCreator from "./ShapeCreator";
import Planet from "./Planet";
import {GAMEFIELD_OPTIONS} from "./Constants";


export default class GameField extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
        this.planet=new Planet();
        this.mesh.add(this.planet.mesh);
        this.setPosition();
    }

    setPosition() {
        this.mesh.position.y=-30.5;
    }

    rotate() {
        this.mesh.rotation.x += GAMEFIELD_OPTIONS.rotationSpeed;
    }
}
