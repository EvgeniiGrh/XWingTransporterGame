import Scene3D from "./Scene3D";
import SkyBox from "./SkyBox";
import GameField from "./GameField";
import Spaceship from "./Spaceship";
import FightersContainer from "./FightersContainer";
import StarCruiser from "./StarCruiser";
import {SCENE3D_OPTIONS, SPACESHIP_OPTIONS, FINISH_OPTIONS} from "./Constants";

export default class GameProcess {
    constructor(canvas) {
        this.movingObjects=[];
        this.inGame=true;
        this.firstGame=true;
        this.finish=false;
        this.lastSpaceshipPosition=null;
        this.canvas = canvas;
        this.scoreResults=document.querySelector('#score-results');
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

        debugger;
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

        this.fightersContainer= new FightersContainer();
        this.fightersContainer.setPrimaryPosition();
        this.fightersContainer.setPrimarySpeed();
        this.movingObjects.push(this.fightersContainer);

        this.fightersContainer.createFighters();
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
            this.increaseScore();
            this.fightersContainer.randomizeEnemies();
        }
    }

    increaseScore() {
        this.scoreResults.innerText++;
    }

    resetScore() {
        this.scoreResults.innerText=0;
    }

    checkSpaceshipMovement() {
        this.lastSpaceshipPosition=this.spaceship.mesh.position.x;

        if (this.spaceship.isSpaceshipNotMove(this.lastSpaceshipPosition)) {
            this.spaceship.alignSpaceship();
        }
    }

    checkCollision() {
        this.fightersContainer.enemiesArray.forEach(( enemy ) => {
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
        this.resetScore();

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
