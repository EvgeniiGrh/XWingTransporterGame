import ShapeCreator from "./ShapeCreator";
import {ENEMY_OPTIONS, SPACESHIP_OPTIONS, WINDOW_OPTIONS} from "./Constants";

export default class Spaceship extends ShapeCreator {

    constructor() {
        super();
        this.lastTurnCoordinateX=0;
        this.inListening=false;
    }

    createMesh() {
        this.mesh = new THREE.Object3D();
        this.plane = new THREE.ObjectLoader();
        this.plane.load( SPACESHIP_OPTIONS.link, ( object ) => {
            this.mesh.add(object);
        });
        this.setPrimaryPosition();
    }

    setPrimaryPosition() {
        this.mesh.position.z = SPACESHIP_OPTIONS.inIntroCoordinates.z;
        this.mesh.position.y = SPACESHIP_OPTIONS.inIntroCoordinates.y;
        this.mesh.rotation.z=0;
    }

    listenSpaceshipMove() {
        this.inListening=true;
        document.addEventListener('mousemove', this.mouseMoveListener.bind(this));
    }

    mouseMoveListener(event) {
        let tx = -1 + (event.clientX / WINDOW_OPTIONS.gameWindowWidth)*2;
        let ty = 1 - (event.clientY / WINDOW_OPTIONS.gameWindowHeight)*2;

        const currentX = this.normalizePosition(tx, -1, 1, -SPACESHIP_OPTIONS.flyWidthBorder, SPACESHIP_OPTIONS.flyWidthBorder);
        const currentY = this.normalizePosition(ty, -1, 1, -0.86, 2);//-0.47, 1.6//-SPACESHIP_OPTIONS.flyHeightBorder+1,SPACESHIP_OPTIONS.flyHeightBorder+0.5);

        this.mesh.position.x = currentX;
        this.mesh.position.y = currentY;

        this.turning(currentX);
    }

    turning(currentX) {
        if (currentX>this.lastTurnCoordinateX) {
            this.mesh.rotation.z += SPACESHIP_OPTIONS.turningSpeed;
        }
        else {
            this.mesh.rotation.z -= SPACESHIP_OPTIONS.turningSpeed;
        }
        this.lastTurnCoordinateX = currentX;
    }

    isSpaceshipNotMove(lastSpaceshipPosition) {
        return (lastSpaceshipPosition===this.lastTurnCoordinateX) ||
            (this.mesh.rotation.z!==0);
    }

    alignSpaceship() {
        if (this.mesh.rotation.z > SPACESHIP_OPTIONS.alignmentPosition &&
            this.mesh.rotation.z < SPACESHIP_OPTIONS.circle ) {
            this.mesh.rotation.z -= SPACESHIP_OPTIONS.turningBackSpeed;
        }

        if (this.mesh.rotation.z < SPACESHIP_OPTIONS.alignmentPosition &&
            this.mesh.rotation.z >- SPACESHIP_OPTIONS.circle ) {
            this.mesh.rotation.z += SPACESHIP_OPTIONS.turningBackSpeed;
        }

        if (this.mesh.rotation.z > SPACESHIP_OPTIONS.circle ||
            this.mesh.rotation.z <- SPACESHIP_OPTIONS.circle) {
            this.mesh.rotation.z=0;
        }
    }

    normalizePosition(v,vmin,vmax,tmin,tmax) {
        let nv = Math.max(Math.min(v,vmax), vmin);
        let dv = vmax-vmin;
        let pc = (nv-vmin)/dv;
        let dt = tmax-tmin;
        return tmin + (pc*dt);
    }
}
