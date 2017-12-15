import ShapeCreator from "./ShapeCreator";
import {GAMEFIELD_OPTIONS} from "./Constants";


export default class GameField extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        const texture = new THREE.TextureLoader().load( GAMEFIELD_OPTIONS.link );
        const geometry = new THREE.SphereGeometry(GAMEFIELD_OPTIONS.radius,GAMEFIELD_OPTIONS.segmentsQuantity,GAMEFIELD_OPTIONS.segmentsQuantity);
        const material = new THREE.MeshBasicMaterial({map: texture});
        this.mesh = new THREE.Mesh( geometry, material );
        this.setPrimaryPosition();
        this.setPrimarySpeed();
    }

    setPrimaryPosition() {
        this.mesh.position.y=GAMEFIELD_OPTIONS.Coordinates.y;
        this.mesh.rotation.z=GAMEFIELD_OPTIONS.angleOfSlope;
    }

    setPrimarySpeed() {
        this.movementSpeed=GAMEFIELD_OPTIONS.rotationSpeed;
    }

    movement() {
        this.mesh.rotation.x += this.movementSpeed;
    }

    increaseMovementSpeed() {
        this.mesh.rotation.x=0;
        this.movementSpeed+=GAMEFIELD_OPTIONS.increaseStep;
    }

    isWholeCircle() {
        return this.mesh.rotation.x>GAMEFIELD_OPTIONS.wholeCircle;
    }
}
