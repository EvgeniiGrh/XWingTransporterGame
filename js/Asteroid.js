import ShapeCreator from "./ShapeCreator";
import {ASTEROID_OPTIONS} from "./Constants";

export default class Asteroid extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        const sphereGeometry = new THREE.DodecahedronGeometry( ASTEROID_OPTIONS.radius, ASTEROID_OPTIONS.detail);
        const sphereMaterial = new THREE.MeshStandardMaterial( { color: ASTEROID_OPTIONS.color ,shading: THREE.FlatShading} );
        this.mesh = new THREE.Mesh( sphereGeometry, sphereMaterial );
    }

    setPosition(x,y,z) {
        this.mesh.position.x=x;//2
        this.mesh.position.y=y;//31
        this.mesh.position.z=z;//2
    }

    setRotationSpeed(rotationSpeed) {
        this.rotationSpeed=rotationSpeed;
    }

    rotate() {
        this.mesh.rotation.z+=this.rotationSpeed;//ASTEROID_OPTIONS.rotationSpeed;
    }

    step(z) {
        this.mesh.position.z+=z;//2
    }
}
