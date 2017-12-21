import Scene3D from "./Scene3D";
import SkyBox from "./SkyBox";
import GameField from "./GameField";
import Spaceship from "./Spaceship";
import Enemy from "./Enemy";
import EnemiesContainer from "./EnemiesContainer";
import StarCruiser from "./StarCruiser";
import {SCENE3D_OPTIONS, SPACESHIP_OPTIONS, ENEMY_OPTIONS, FINISH_OPTIONS} from "./Constants";

export default class GameProcess {
    constructor(canvas) {
        this.movingObjects=[];
        this.enemiesArray=[];
        this.inGame=true;
        this.firstGame=true;
        this.finish=false;
        this.lastSpaceshipPosition=null;
        this.canvas = canvas;
    };

    init() {
        this.scene3D = new Scene3D(this.canvas);

        this.skyBox = new SkyBox();
        this.scene3D.scene.add(this.skyBox.mesh);
        this.movingObjects.push(this.skyBox);

        this.gameField = new GameField();
        this.scene3D.scene.add(this.gameField.mesh);
        this.movingObjects.push(this.gameField);

        this.spaceship = new Spaceship();
        this.scene3D.scene.add(this.spaceship.mesh);

        this.addEnemies();

    }

    startIntro() {
        this.animateIntro();
        this.scene3D.audio.playMainSound();
    }

    animateIntro() {
        this.introMovement();
        this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
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

    pause(menuScreen) {
        this.inGame=!this.inGame;

        if (this.inGame) {
            this.canvas.classList.remove('hide');
            menuScreen.classList.add("hide");

            if (!this.lastSpaceshipPosition) {
                this.animateIntro();
            } else {
                this.spaceship.mesh.rotation.z=SPACESHIP_OPTIONS.turningBackSpeed;
                this.animateGameProcess();
            }

        } else {
            this.canvas.classList.add('hide');
            menuScreen.classList.remove("hide");
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    startGame() {
        cancelAnimationFrame(this.animationFrameId);
        this.scene3D.scene.add(this.fightersContainer.mesh);

        if (this.firstGame) {
            this.spaceship.listenSpaceshipMove();
        }

        this.enemyPosition = new THREE.Vector3();
        this.animateGameProcess();
    }

    addEnemies() {
        this.starCruiser= new StarCruiser();
        this.scene3D.scene.add(this.starCruiser.mesh);

        const enemiesQuantity=Math.floor(35+Math.random()*10);

        this.fightersContainer= new EnemiesContainer();
        this.fightersContainer.setPrimaryPosition();
        this.fightersContainer.setPrimarySpeed();
        this.movingObjects.push(this.fightersContainer);

        this.shipLoader=new THREE.ObjectLoader();
        this.shipLoader.load( ENEMY_OPTIONS.link, ( object ) => {

            for(let i=0;i<enemiesQuantity+1;i++) {
                let copy=object.clone();

                let enemy = new Enemy();
                enemy.mesh.add(copy);
                enemy.setRandomPosition();

                if (i!==0) {
                    this.checkEnemiesDistribution(enemy);
                }

                this.enemiesArray.push(enemy);
                this.fightersContainer.mesh.add(enemy.mesh);
            }

        });
    }

    checkEnemiesDistribution(enemy) {//so the coordinates of each enemy don't match other enemies
        while (this.enemiesArray.some(
            (item) => {
                return (item.mesh.position.x===enemy.mesh.position.x ||
                    item.mesh.position.y===enemy.mesh.position.y ||
                    item.mesh.position.z===enemy.mesh.position.z);
            }
        )) {
            enemy.setRandomPosition();
        }
    }

    animateGameProcess() {
        this.animationFrameId=requestAnimationFrame(()=>this.animateGameProcess());

            this.movingObjects.forEach((item)=>{
                item.movement();
            });
            this.checkWholeCircle();
            this.checkFightersPosition();
            this.checkSpaceshipMovement();

            this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
            this.checkCollision();
    }

    checkWholeCircle() {
        if(this.gameField.isWholeCircle()) {
            this.movingObjects.forEach((item)=>{
                item.increaseMovementSpeed();
            });
            this.starCruiser.move()
        }
    }

    checkFightersPosition() {
        if (this.fightersContainer.isNearTheSpaceship()) {
            this.scene3D.audio.playFightersFly();
        }

        if (this.fightersContainer.isBehindCamera()) {
            this.fightersContainer.setPrimaryPosition();
            this.enemiesArray.forEach((item) => {
                item.setRandomPosition();
            });
        }
    }

    checkSpaceshipMovement() {
        this.lastSpaceshipPosition=this.spaceship.mesh.position.x;

        if (this.spaceship.isSpaceshipNotMove(this.lastSpaceshipPosition)) {
            this.spaceship.alignSpaceship();
        }
    }

    checkCollision() {
        this.enemiesArray.forEach(( enemy ) => {
            this.enemyPosition.setFromMatrixPosition( enemy.mesh.matrixWorld );
                if (this.enemyPosition.manhattanDistanceTo(this.spaceship.mesh.position)<=0.9) {
                    this.finishGame();
                }
        });
    }

    finishGame() {
        this.finish=true;
        cancelAnimationFrame(this.animationFrameId);
        this.scene3D.audio.playFailSound();
        this.scene3D.audio.stopMainSound();

        this.showFinishWindow();
    }

    restart() {
        //debugger;
        this.scene3D.scene.remove(this.fightersContainer.mesh);
        this.scene3D.audio.stopMainSound();

        this.movingObjects.forEach((item)=>{
            item.setPrimaryPosition();
            item.setPrimarySpeed();
        });

        this.spaceship.setPrimaryPosition();
        this.scene3D.setCameraPrimaryPosition();
        this.inGame=true;
        this.finish=false;
        this.lastSpaceshipPosition=null;

        if (this.spaceship.inListening) {
            this.firstGame=false;
        }
        this.startIntro();
    }

    showFinishWindow() {
        const event = new Event("keydown");
        event.keyCode = FINISH_OPTIONS.finishCode;
        document.dispatchEvent(event);
    }
}
