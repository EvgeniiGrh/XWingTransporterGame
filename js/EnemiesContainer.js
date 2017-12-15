import ShapeCreator from "./ShapeCreator";
import {FIGHTERSCONTAINER_OPTIONS} from "./Constants";

export default class EnemiesContainer extends ShapeCreator{
    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
    }

    setPrimaryPosition() {
        this.mesh.position.z=FIGHTERSCONTAINER_OPTIONS.distanceCoordinates.z;
        this.mesh.position.y=FIGHTERSCONTAINER_OPTIONS.distanceCoordinates.y;
    }

    setPrimarySpeed() {
        this.movementSpeed=FIGHTERSCONTAINER_OPTIONS.flySpeed;
    }

    isBehindCamera() {
        return this.mesh.position.z>FIGHTERSCONTAINER_OPTIONS.maxZCoordinate;
    }

    isNearTheSpaceship() {
        return this.mesh.position.z>FIGHTERSCONTAINER_OPTIONS.coordinateZToPlaySound;
    }

    movement() {
        this.mesh.position.z+=this.movementSpeed;
    }

    increaseMovementSpeed() {
        this.movementSpeed+=FIGHTERSCONTAINER_OPTIONS.increaseStep;
    }
}
