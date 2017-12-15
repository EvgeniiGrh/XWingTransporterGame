import ShapeCreator from "./ShapeCreator";

export default class Enemy extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
    }

    setRandomPosition() {
        let xpos = -13+Math.random()*(26);
        let ypos = 29.5+Math.random()*(6);
        let zpos = -10.5+Math.random()*(20);

        this.mesh.position.x = xpos;
        this.mesh.position.y = ypos;
        this.mesh.position.z = zpos;
    }
}
