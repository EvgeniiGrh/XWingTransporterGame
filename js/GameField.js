import ShapeCreator from "./ShapeCreator";
import {GAMEFIELD_OPTIONS} from "./Constants";


export default class GameField extends ShapeCreator {

    constructor() {
        super();
        this.rotationSpeed=GAMEFIELD_OPTIONS.rotationSpeed;
    }

    createMesh() {
        const texture = new THREE.TextureLoader().load( GAMEFIELD_OPTIONS.link );
        const geometry = new THREE.SphereGeometry(GAMEFIELD_OPTIONS.radius,GAMEFIELD_OPTIONS.segmentsQuantity,GAMEFIELD_OPTIONS.segmentsQuantity);
        const material = new THREE.MeshBasicMaterial({map: texture});
        // material.transparent=true;
        // material.opacity=0;
        this.mesh = new THREE.Mesh( geometry, material );
        this.setPrimaryPosition();
    }

    setPrimaryPosition() {
        this.mesh.position.y=GAMEFIELD_OPTIONS.Coordinates.y;
        this.mesh.rotation.z=GAMEFIELD_OPTIONS.angleOfSlope;
    }

    movement() {
        this.mesh.rotation.x += this.rotationSpeed;
    }

    increaseMovementSpeed() {
        this.mesh.rotation.x=0;
        this.rotationSpeed+=GAMEFIELD_OPTIONS.increaseStep;
    }

    isWholeCircle() {
        return this.mesh.rotation.x>GAMEFIELD_OPTIONS.wholeCircle;
    }
}
