import ShapeCreator from "./ShapeCreator";
import {ENEMIES_OPTIONS} from './Constants';

export default class Enemy extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
    }

    setRandomPosition() {
        let xPosition = ENEMIES_OPTIONS.positionBorders.xBottomBorder+Math.random()*(ENEMIES_OPTIONS.positionBorders.xInterval);//-3+Math.random()*(6);
        let yPosition = ENEMIES_OPTIONS.positionBorders.yBottomBorder+Math.random()*(ENEMIES_OPTIONS.positionBorders.yInterval);//29.5+Math.random()*(3.8);
        let zPosition = ENEMIES_OPTIONS.positionBorders.zBottomBorder+Math.random()*(ENEMIES_OPTIONS.positionBorders.zInterval);//-18+Math.random()*(36);

        this.mesh.position.x = xPosition;
        this.mesh.position.y = yPosition;
        this.mesh.position.z = zPosition;
    }
}
