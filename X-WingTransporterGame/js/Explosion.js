import ShapeCreator from "./ShapeCreator";
import {EXPLOSION_OPTIONS} from "./Constants";

export default class Explosion extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
        this.ship=new THREE.ObjectLoader();
        this.ship.load( EXPLOSION_OPTIONS.link, ( object ) => {
            this.mesh.add(object);
            this.t=object;
        });

        this.setPrimaryPosition();
    }

    setPrimaryPosition() {
        this.mesh.position.z=EXPLOSION_OPTIONS.distanceCoordinates.z;
        this.mesh.position.y=EXPLOSION_OPTIONS.distanceCoordinates.y;
        //this.mesh.rotation.y=Math.PI/2;
    }

}
