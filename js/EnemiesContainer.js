import ShapeCreator from "./ShapeCreator";
import {FIGHTERSCONTAINER_OPTIONS} from "./Constants";

export default class EnemiesContainer extends ShapeCreator{
    constructor() {
        super();
        this.flySpeed=FIGHTERSCONTAINER_OPTIONS.flySpeed;
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
    }

    setPrimaryPosition() {
        this.mesh.position.z=FIGHTERSCONTAINER_OPTIONS.distanceCoordinates.z;
        this.mesh.position.y=FIGHTERSCONTAINER_OPTIONS.distanceCoordinates.y;
    }

    isBehindCamera() {
        return this.mesh.position.z>FIGHTERSCONTAINER_OPTIONS.maxZCoordinate;
    }

    isNearTheSpaceship() {
        return this.mesh.position.z>FIGHTERSCONTAINER_OPTIONS.coordinateZToPlaySound;
    }

    movement() {
        this.mesh.position.z+=this.flySpeed;
    }

    increaseMovementSpeed() {
        this.flySpeed+=FIGHTERSCONTAINER_OPTIONS.increaseStep;
    }
}
