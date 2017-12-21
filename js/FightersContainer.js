import ShapeCreator from "./ShapeCreator";
import Enemy from "./Enemy";
import {FIGHTERSCONTAINER_OPTIONS, ENEMIES_OPTIONS} from "./Constants";

export default class FightersContainer extends ShapeCreator{
    constructor() {
        super();
        this.enemiesArray=[];
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
    }

    createFighters() {
        this.enemiesQuantity=Math.floor(ENEMIES_OPTIONS.minQuantity+Math.random()*ENEMIES_OPTIONS.interval);

        this.modelLoader=new THREE.ObjectLoader();
        this.modelLoader.load( ENEMIES_OPTIONS.link, ( object ) => {

            for(let i=0;i<this.enemiesQuantity+1;i++) {
                const copy=object.clone();
                const enemy = new Enemy();
                enemy.mesh.add(copy);

                this.addFighter(enemy);
            }
            this.randomizeEnemies();
        });
    }

    addFighter(enemy) {
        enemy.setRandomPosition();

        this.enemiesArray.push(enemy);
        this.mesh.add(enemy.mesh);
    }

    checkEnemiesDistribution(enemy) {//so the coordinates of each enemy don't match other enemies
        while (this.enemiesArray.some(
            (item) => {
                return (item.mesh.position.x===enemy.mesh.position.x ||
                    item.mesh.position.y===enemy.mesh.position.y ||
                    item.mesh.position.z===enemy.mesh.position.z) &&
                    item!==enemy;
            }
        )) {
            enemy.setRandomPosition();
        }
    }

    randomizeEnemies() {
        this.enemiesArray.forEach((item) => {
            item.setRandomPosition();
            this.checkEnemiesDistribution(item);
        });
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
