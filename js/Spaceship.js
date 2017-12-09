import ShapeCreator from "./ShapeCreator";
import {SPACESHIP_OPTIONS, WINDOW_OPTIONS} from "./Constants";

export default class Spaceship extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
        this.plane = new THREE.ObjectLoader();
        this.plane.load( '../src/JSON_Models/spaceship.json', ( obj ) => {
            this.mesh.add(obj);
        });
        this.setPosition();
    }

    setPosition() {
        this.mesh.position.z = 92.6;
        this.mesh.position.y=88.3;
    }

    setMouseMoveListener(event) {
        let tx = -1 + (event.clientX / WINDOW_OPTIONS.gameWindowWidth)*2;
        let ty = 1 - (event.clientY / WINDOW_OPTIONS.gameWindowHeight)*2;

        this.mesh.position.x=this.normalizePosition(tx, -1, 1, -SPACESHIP_OPTIONS.flyWidthBorder, SPACESHIP_OPTIONS.flyWidthBorder);
        this.mesh.position.y=this.normalizePosition(ty, -1, 1, -0.5, 1.5);//-SPACESHIP_OPTIONS.flyHeightBorder+1,SPACESHIP_OPTIONS.flyHeightBorder+0.5);
    }

    normalizePosition(v,vmin,vmax,tmin,tmax) {
        let nv = Math.max(Math.min(v,vmax), vmin);
        let dv = vmax-vmin;
        let pc = (nv-vmin)/dv;
        let dt = tmax-tmin;
        let tv = tmin + (pc*dt);
        return tv;
    }
}
