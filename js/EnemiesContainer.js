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

    isBehindCamera() {
        return this.mesh.position.z>FIGHTERSCONTAINER_OPTIONS.maxZCoordinate;
    }

    movement() {
        this.flyStep();
    }

    flyStep() {
        this.mesh.position.z+=FIGHTERSCONTAINER_OPTIONS.flyStep;
    }
}
