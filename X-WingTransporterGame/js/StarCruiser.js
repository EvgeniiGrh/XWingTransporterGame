import ShapeCreator from "./ShapeCreator";
import {STARCRUISER_OPTIONS} from "./Constants";

export default class StarCruiser extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
        this.ship=new THREE.ObjectLoader();
        this.ship.load( STARCRUISER_OPTIONS.link, ( object ) => {
            this.mesh.add(object);
        });

        this.setPrimaryPosition();
    }

    setPrimaryPosition() {
        this.mesh.position.z=STARCRUISER_OPTIONS.distanceCoordinates.z;
        this.mesh.position.y=STARCRUISER_OPTIONS.distanceCoordinates.y;
        this.mesh.rotation.y=Math.PI/2;
    }

    move() {
        if (this.mesh.rotation.y<Math.PI) {
            this.mesh.rotation.y+=STARCRUISER_OPTIONS.turningAngle;
        }
    }

}
