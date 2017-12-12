import ShapeCreator from "./ShapeCreator";
import {GAMEFIELD_OPTIONS} from "./Constants";


export default class GameField extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        const texture = new THREE.TextureLoader().load( GAMEFIELD_OPTIONS.link );
        const geometry = new THREE.SphereGeometry(GAMEFIELD_OPTIONS.radius,GAMEFIELD_OPTIONS.segmentsQuantity,GAMEFIELD_OPTIONS.segmentsQuantity);
        const material = new THREE.MeshStandardMaterial({map: texture});
        // material.transparent=true;
        // material.opacity=0;
        this.mesh = new THREE.Mesh( geometry, material );
        this.setPosition();
    }

    setPosition() {
        this.mesh.position.y=-30.5;
        this.mesh.rotation.z=Math.PI/2;
    }

    movement() {
        this.mesh.rotation.x += GAMEFIELD_OPTIONS.rotationSpeed;
    }

    increaseMovementSpeed() {
        this.mesh.rotation.x=0;
        GAMEFIELD_OPTIONS.rotationSpeed+=GAMEFIELD_OPTIONS.increaseStep;
    }

    isWholeCircle() {
        return this.mesh.rotation.x>GAMEFIELD_OPTIONS.wholeCircle;
    }
}
