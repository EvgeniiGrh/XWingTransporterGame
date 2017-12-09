import ShapeCreator from "./ShapeCreator";
import {PLANET_OPTIONS} from "./Constants";

export default class Planet extends ShapeCreator {
    constructor() {
        super();
    }

    createMesh() {
        const texture = new THREE.TextureLoader().load( PLANET_OPTIONS.link );
        const geometry = new THREE.SphereGeometry(PLANET_OPTIONS.radius,PLANET_OPTIONS.segmentsQuantity,PLANET_OPTIONS.segmentsQuantity);
        const material = new THREE.MeshStandardMaterial({map: texture});
        this.mesh = new THREE.Mesh( geometry, material );
    }
}
