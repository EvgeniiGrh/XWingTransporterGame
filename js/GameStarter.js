import Scene3D from "./Scene3D";
import SkyBox from "./SkyBox";
import GameField from "./GameField";
import Spaceship from "./Spaceship";
import Asteroid from "./Asteroid";

export default class GameStarter {
    constructor() {
        this.asteroids=[];
    };

    init() {
        this.scene3D = new Scene3D();

        let axis = new THREE.AxisHelper(500);//add temporary Axises
        this.scene3D.scene.add(axis);

        this.skyBox = new SkyBox();
        this.scene3D.scene.add(this.skyBox.mesh);

        this.gameField = new GameField();
        this.scene3D.scene.add(this.gameField.mesh);

        this.spaceship = new Spaceship();
        this.scene3D.scene.add(this.spaceship.mesh);

        this.animateIntro();
    }

    addAsteroids() {
        this.asteroidsQuantity=Math.floor(5+Math.random()*8);

        this.asteroidsContainer=new THREE.Object3D();

        for(let i=0;i<this.asteroidsQuantity;i++){
            this.asteroid = new Asteroid();
            let xpos=-3.4+Math.random()*(6.8);
            let ypos=31+Math.random()*(1.5);
            let zpos=-5.5+Math.random()*(5.5);
            let rotationSpeed=Math.random()/10;

            this.asteroid.setPosition(xpos,ypos,zpos);
            this.asteroid.setRotationSpeed(rotationSpeed);
            this.asteroids.push(this.asteroid);

            this.asteroidsContainer.add(this.asteroid.mesh);
            //this.gameField.mesh.add(this.asteroid.mesh);
        }

        this.gameField.mesh.add(this.asteroidsContainer);
    }

    animateIntro() {
        if (this.scene3D.camera.position.z > 6) {
            this.scene3D.camera.position.z--;
        }
        if (this.scene3D.camera.position.y > 1) {
            this.scene3D.camera.position.y--;
        }

        //DEBUG IT
        if (this.spaceship.mesh.position.z > 3.6) {
            this.spaceship.mesh.position.z--;
        }
        if (this.spaceship.mesh.position.y > 1) {
            this.spaceship.mesh.position.y--;
        }

        this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
        this.scene3D.controls.update();
        this.animationFrameId = requestAnimationFrame(()=>this.animateIntro());

        if (this.scene3D.camera.position.y === 1 && this.scene3D.camera.position.z === 6) {
            cancelAnimationFrame(this.animationFrameId);
            document.addEventListener('mousemove', this.spaceship.setMouseMoveListener.bind(this.spaceship), false);
            this.scene3D.createLights();
            this.addAsteroids();
            this.animateGameProcess();
        }
    }

    animateGameProcess() {
        this.gameField.rotate();
        this.skyBox.rotate();
        this.asteroids.forEach(function (item) {
            item.rotate();
        });
        this.scene3D.renderer.render(this.scene3D.scene, this.scene3D.camera);
        this.scene3D.controls.update();
        requestAnimationFrame(this.animateGameProcess.bind(this));
    }
}
