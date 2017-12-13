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

        //this.animateIntro();
        //this.addEnemies();

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
        //this.addEnemies();
        this.enemyPosition = new THREE.Vector3();
        this.animateGameProcess();
    }

    addEnemies() {
        const enemiesQuantity=Math.floor(15+Math.random()*10);

        this.fightersContainer= new EnemiesContainer();
        this.fightersContainer.setPrimaryPosition();
        this.movingObjects.push(this.fightersContainer);

        for(let i=0;i<enemiesQuantity;i++) {
            this.enemy = new Enemy();
            this.enemy.setRandomPosition();

            if (i!==0) {//so the coordinates of each enemy don't match other enemies
                while (this.enemiesArray.some(
                    (item) => {
                        return (item.mesh.position.x===this.enemy.mesh.position.x ||
                            item.mesh.position.y===this.enemy.mesh.position.y ||
                            item.mesh.position.z===this.enemy.mesh.position.z);
                    }
                )) {
                    this.enemy.setRandomPosition();
                }
            }

            this.enemiesArray.push(this.enemy);
            this.fightersContainer.mesh.add(this.enemy.mesh);
        }

        this.scene3D.scene.add(this.fightersContainer.mesh);
    }

    animateGameProcess() {
        this.movingObjects.forEach((item)=>{
            item.movement();
        });
        this.checkWholeCircle();
        this.checkFightersPosition();
        this.checkSpaceshipMovement();

        this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
        this.scene3D.controls.update();
        this.animationFrameId=requestAnimationFrame(this.animateGameProcess.bind(this));

        this.checkCollision();
    }

    checkWholeCircle() {
        if(this.gameField.isWholeCircle()) {
            this.movingObjects.forEach((item)=>{
                item.increaseMovementSpeed();
            });
        }
    }

    checkFightersPosition() {
        if (this.fightersContainer.isBehindCamera()) {
            this.fightersContainer.setPrimaryPosition();
            this.enemiesArray.forEach((item) => {
                item.setRandomPosition();
            })
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
                if (this.enemyPosition.manhattanDistanceTo(this.spaceship.mesh.position)<=0.95) {
                    this.finishGame();
                }
        });
    }

    finishGame() {
        cancelAnimationFrame(this.animationFrameId );
        console.log("FINISH");
        this.scene3D.createCommonLight();
        this.scene3D.createLights();
        this.scene3D.scene.remove(this.spaceship.mesh);

        this.addFireBall();
        this.animateGameFinish();
    }

    addFireBall() {
        let sphereGeometry = new THREE.DodecahedronGeometry( 2.7, 1);
        let sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xd33404 ,shading: THREE.FlatShading} );
        this.fireBall = new THREE.Mesh( sphereGeometry, sphereMaterial );

        this.fireBall.position.x=this.spaceship.mesh.position.x;
        this.fireBall.position.y=this.spaceship.mesh.position.y;
        this.fireBall.position.z=this.spaceship.mesh.position.z-2;

        this.scene3D.scene.add(this.fireBall);
    }

    animateGameFinish() {
        this.fireBall.rotation.y+=1;
        this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
        this.scene3D.controls.update();
        this.animationFrameId=requestAnimationFrame(this.animateGameFinish.bind(this));
    }
}
