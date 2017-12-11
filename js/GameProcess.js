import Scene3D from "./Scene3D";
import SkyBox from "./SkyBox";
import GameField from "./GameField";
import Spaceship from "./Spaceship";
import Enemy from "./Enemy";
import EnemiesContainer from "./EnemiesContainer";
import {SCENE3D_OPTIONS, SPACESHIP_OPTIONS} from "./Constants";

export default class GameProcess {
    constructor() {
        this.movingObjects=[];
        this.enemiesArray=[];
        this.lastSpaceshipPosition=0;
    };

    init() {
        this.scene3D = new Scene3D();

        // let axis = new THREE.AxisHelper(500);//add temporary Axises
        // this.scene3D.scene.add(axis);

        this.skyBox = new SkyBox();
        this.scene3D.scene.add(this.skyBox.mesh);
        this.movingObjects.push(this.skyBox);

        this.gameField = new GameField();
        this.scene3D.scene.add(this.gameField.mesh);
        this.movingObjects.push(this.gameField);

        this.spaceship = new Spaceship();
        this.scene3D.scene.add(this.spaceship.mesh);

        this.animateIntro();
    }

    animateIntro() {
        this.introMovement();
        this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
        this.scene3D.controls.update();
        this.animationFrameId = requestAnimationFrame(()=>this.animateIntro());

        if (this.isIntroEnd()) {
            this.startGame();
        }
    }

    introMovement() {
        if (this.scene3D.camera.position.z > SCENE3D_OPTIONS.cameraOptions.inGameCoordinates.z) {
            this.scene3D.camera.position.z--;
        }
        if (this.scene3D.camera.position.y > SCENE3D_OPTIONS.cameraOptions.inGameCoordinates.y) {
            this.scene3D.camera.position.y--;
        }

        //DEBUG IT
        if (this.spaceship.mesh.position.z > SPACESHIP_OPTIONS.inGameCoordinates.z) {
            this.spaceship.mesh.position.z--;
        }
        if (this.spaceship.mesh.position.y > SPACESHIP_OPTIONS.inGameCoordinates.y) {
            this.spaceship.mesh.position.y--;
        }
    }

    isIntroEnd() {
        if (this.scene3D.camera.position.y === SCENE3D_OPTIONS.cameraOptions.inGameCoordinates.y &&
            this.scene3D.camera.position.z === SCENE3D_OPTIONS.cameraOptions.inGameCoordinates.z) {
            return true;
        }
    }

    startGame() {
        cancelAnimationFrame(this.animationFrameId);
        this.spaceship.listenSpaceshipMove();
        this.addEnemies();
        this.animateGameProcess();
    }

    addEnemies() {
        const enemiesQuantity=5;//Math.floor(10+Math.random()*8);

        this.fightersContainer= new EnemiesContainer();
        this.fightersContainer.setPrimaryPosition();
        this.movingObjects.push(this.fightersContainer);

        for(let i=0;i<enemiesQuantity;i++) {
            this.enemy = new Enemy();
            this.enemy.setRandomPosition();
            this.enemiesArray.push(this.enemy);
            this.fightersContainer.mesh.add(this.enemy.mesh);
        }

        this.scene3D.scene.add(this.fightersContainer.mesh);
    }


    animateGameProcess() {
        this.movingObjects.forEach((item)=>{
            item.movement();
        });

        //if(this.gameField.mesh.rotation.x>2*Math.PI) {GAMEFIELD_OPTIONS.rotationSpeed+=0.001;}
        if (this.fightersContainer.isBehindCamera()) {
            this.fightersContainer.setPrimaryPosition();
            this.enemiesArray.forEach((item) => {
                item.setRandomPosition();
            })
        }

        this.lastSpaceshipPosition=this.spaceship.mesh.position.x;
        if (this.lastSpaceshipPosition===this.spaceship.lastTurnCoordinateX || this.spaceship.mesh.rotation.z!==0) {
            this.spaceship.alignSpaceship();
        }

        this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
        this.scene3D.controls.update();
        requestAnimationFrame(this.animateGameProcess.bind(this));
    }
}
