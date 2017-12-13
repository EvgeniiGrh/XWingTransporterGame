/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// export const OPTIONS = {
//     GLSL_MODULES: {
//         sky_vertex: "varying vec2 vUV; void main() {vUV = uv;vec4 pos = vec4(position, 1.0);gl_Position = projectionMatrix * modelViewMatrix * pos;}",
//         sky_fragment: "uniform sampler2D texture;varying vec2 vUV;void main() {vec4 sample = texture2D(texture, vUV);gl_FragColor = vec4(sample.xyz, sample.w);}"
//     }
//
// };

const GLSL_MODULES = {
    sky_vertex: "varying vec2 vUV; void main() {vUV = uv;vec4 pos = vec4(position, 1.0);gl_Position = projectionMatrix * modelViewMatrix * pos;}",
    sky_fragment: "uniform sampler2D texture;varying vec2 vUV;void main() {vec4 sample = texture2D(texture, vUV);gl_FragColor = vec4(sample.xyz, sample.w);}"
};
/* harmony export (immutable) */ __webpack_exports__["d"] = GLSL_MODULES;


const WINDOW_OPTIONS = {
    gameWindowHeight: window.innerHeight,
    gameWindowWidth: window.innerWidth,
};
/* harmony export (immutable) */ __webpack_exports__["h"] = WINDOW_OPTIONS;


const GAMEFIELD_OPTIONS = {
    link: './src/images/DS.jpg',
    radius: 30,
    segmentsQuantity: 90,
    angleOfSlope: Math.PI/3,
    rotationSpeed: 0.006,
    increaseStep: 0.003,
    wholeCircle: 2*Math.PI
};
/* harmony export (immutable) */ __webpack_exports__["c"] = GAMEFIELD_OPTIONS;


const ENEMY_OPTIONS = {
    object: [],
    link: './src/JSON_Models/TIE_Fighter.json',
    rotationSpeed: 0.01,
    radius: 0.5,
    detail: 1,
    color: 0x5c3322
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ENEMY_OPTIONS;


const SKYBOX_OPTIONS = {
    link: './src/images/hubble-min.jpg',
    radius: 600,
    segmentsQuantity: 200,
    angleOfSlope: Math.PI/3,
    rotationSpeed: 0.0006,
    increaseStep: 0//0.0002
};
/* harmony export (immutable) */ __webpack_exports__["f"] = SKYBOX_OPTIONS;


const SPACESHIP_OPTIONS = {
    link: './src/JSON_Models/spaceship.json',
    inIntroCoordinates: {
        y: 88.3,
        z: 92.6
    },

    inGameCoordinates: {
        z: 3.6,
        y: 1
    },

    flyWidthBorder: WINDOW_OPTIONS.gameWindowWidth*0.002,
    flyHeightBorder: WINDOW_OPTIONS.gameWindowHeight*0.002,
    turningSpeed: 0.02,
    turningBackSpeed: 0.014,
    alignmentPosition:0
};
/* harmony export (immutable) */ __webpack_exports__["g"] = SPACESHIP_OPTIONS;


const FIGHTERSCONTAINER_OPTIONS = {
    flySpeed: 0.5,
    increaseStep: 0.04,
    distanceCoordinates: {
        y: -30,
        z: -120
    },
    maxZCoordinate: 14
};
/* harmony export (immutable) */ __webpack_exports__["b"] = FIGHTERSCONTAINER_OPTIONS;


const SCENE3D_OPTIONS = {
    cameraOptions: {
        inIntroCoordinates: {
            y: 91,
            z: 96
        },

        inGameCoordinates: {
            z: 6,
            y: 1
        },

        verticalFieldOfView: 60,
        aspectRatio: WINDOW_OPTIONS.gameWindowWidth / WINDOW_OPTIONS.gameWindowHeight,
        nearPlane: 0.1,
        farPlane: 1000
    },

    rendererOptions: {
        pixelRatio: 7
    }

};
/* harmony export (immutable) */ __webpack_exports__["e"] = SCENE3D_OPTIONS;




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ShapeCreator {
    constructor(){
        this.createMesh();
    }

    createMesh() {
        throw new Error("Not implemented!");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShapeCreator;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameProcess__ = __webpack_require__(3);


class XWingTransporterGame {
    constructor() {
        this.menu=document.querySelector("#menu");
        this.menuScreen = document.querySelector("#menu-screen");
        this.playButton=document.querySelector("#play");
        this.setPlayListener();
    }

    setPlayListener() {
        this.playButton.addEventListener("click", () => {
            this.menu.classList.add("hide");

            let percent = 3;
            const loading = document.createElement("div");
            loading.classList = "loading";
            this.menuScreen.appendChild(loading);

            const game=new __WEBPACK_IMPORTED_MODULE_0__GameProcess__["a" /* default */]();
            game.init();

            let id = setInterval(() => {
                if(percent === 103) {
                    this.menuScreen.classList.add("hide");
                    document.body.classList.add("hide-cursor");
                    game.animateIntro();
                    clearInterval(id);
                }
                loading.innerText = `${percent}`+"%";
                percent += 5;
            }, 500);
            loading.innerText = `${percent}`+"%";
            game.addEnemies();
        });
    }
}

new XWingTransporterGame();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scene3D__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SkyBox__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameField__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Spaceship__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enemy__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__EnemiesContainer__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Constants__ = __webpack_require__(0);








class GameProcess {
    constructor() {
        this.movingObjects=[];
        this.enemiesArray=[];
        this.lastSpaceshipPosition=0;
    };

    init() {
        this.scene3D = new __WEBPACK_IMPORTED_MODULE_0__Scene3D__["a" /* default */]();

         // let axis = new THREE.AxisHelper(500);//add temporary Axises
         // this.scene3D.scene.add(axis);

        this.skyBox = new __WEBPACK_IMPORTED_MODULE_1__SkyBox__["a" /* default */]();
        this.scene3D.scene.add(this.skyBox.mesh);
        this.movingObjects.push(this.skyBox);

        this.gameField = new __WEBPACK_IMPORTED_MODULE_2__GameField__["a" /* default */]();
        this.scene3D.scene.add(this.gameField.mesh);
        this.movingObjects.push(this.gameField);

        this.spaceship = new __WEBPACK_IMPORTED_MODULE_3__Spaceship__["a" /* default */]();
        this.scene3D.scene.add(this.spaceship.mesh);

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
        if (this.scene3D.camera.position.z > __WEBPACK_IMPORTED_MODULE_6__Constants__["e" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.z) {
            this.scene3D.camera.position.z--;
        }
        if (this.scene3D.camera.position.y > __WEBPACK_IMPORTED_MODULE_6__Constants__["e" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.y) {
            this.scene3D.camera.position.y--;
        }

        //DEBUG IT
        if (this.spaceship.mesh.position.z > __WEBPACK_IMPORTED_MODULE_6__Constants__["g" /* SPACESHIP_OPTIONS */].inGameCoordinates.z) {
            this.spaceship.mesh.position.z--;
        }
        if (this.spaceship.mesh.position.y > __WEBPACK_IMPORTED_MODULE_6__Constants__["g" /* SPACESHIP_OPTIONS */].inGameCoordinates.y) {
            this.spaceship.mesh.position.y--;
        }
    }

    isIntroEnd() {
        if (this.scene3D.camera.position.y === __WEBPACK_IMPORTED_MODULE_6__Constants__["e" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.y &&
            this.scene3D.camera.position.z === __WEBPACK_IMPORTED_MODULE_6__Constants__["e" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.z) {
            return true;
        }
    }

    startGame() {
        cancelAnimationFrame(this.animationFrameId);
        this.spaceship.listenSpaceshipMove();
//
        this.enemyPosition = new THREE.Vector3();
        this.animateGameProcess();
    }

    addEnemies() {
        const enemiesQuantity=Math.floor(15+Math.random()*10);

        this.fightersContainer= new __WEBPACK_IMPORTED_MODULE_5__EnemiesContainer__["a" /* default */]();
        this.fightersContainer.setPrimaryPosition();
        this.movingObjects.push(this.fightersContainer);

        for(let i=0;i<enemiesQuantity;i++) {
            this.enemy = new __WEBPACK_IMPORTED_MODULE_4__Enemy__["a" /* default */]();
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
/* harmony export (immutable) */ __webpack_exports__["a"] = GameProcess;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(0);


class Scene3D {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.createScene();
    }

    createScene() {
        this.scene = new THREE.Scene();
        this.createCamera();
        this.createRenderer();
        //this.createCommonLight();
        this.createControls();
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            __WEBPACK_IMPORTED_MODULE_0__Constants__["e" /* SCENE3D_OPTIONS */].cameraOptions.verticalFieldOfView,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["e" /* SCENE3D_OPTIONS */].cameraOptions.aspectRatio,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["e" /* SCENE3D_OPTIONS */].cameraOptions.nearPlane,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["e" /* SCENE3D_OPTIONS */].cameraOptions.farPlane);

        this.camera.position.y = __WEBPACK_IMPORTED_MODULE_0__Constants__["e" /* SCENE3D_OPTIONS */].cameraOptions.inIntroCoordinates.y;
        this.camera.position.z = __WEBPACK_IMPORTED_MODULE_0__Constants__["e" /* SCENE3D_OPTIONS */].cameraOptions.inIntroCoordinates.z;
        this.scene.add(this.camera);
    }

    createCommonLight() {
        this.light = new THREE.AmbientLight();
        this.scene.add(this.light);
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        this.renderer.setPixelRatio(__WEBPACK_IMPORTED_MODULE_0__Constants__["e" /* SCENE3D_OPTIONS */].rendererOptions.pixelRatio);
    }

    createControls() {
        this.controls = new THREE.TrackballControls(this.camera, this.canvas);
        this.controls.zoomSpeed = 0.5;
    }

    createLights() {
        const pointLight = new THREE.PointLight(0xfff000, 1, 50);
        pointLight.position.set(0, 25, 1.2);
        this.scene.add(pointLight);

        const pointLightHelper = new THREE.PointLightHelper(pointLight, 4);
        this.scene.add(pointLightHelper);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene3D;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class SkyBox extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */]  {

    constructor() {
        super();
    }

    createMesh() {
        const uniforms = {
            texture: { type: 't', value: new THREE.TextureLoader().load(__WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SKYBOX_OPTIONS */].link)}
        };

        const material = new THREE.ShaderMaterial( {
            uniforms:       uniforms,
            vertexShader:  __WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GLSL_MODULES */].sky_vertex,
            fragmentShader: __WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GLSL_MODULES */].sky_fragment
        });

        const geometry = new THREE.SphereGeometry(__WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SKYBOX_OPTIONS */].radius,__WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SKYBOX_OPTIONS */].segmentsQuantity,__WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SKYBOX_OPTIONS */].segmentsQuantity);
        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.scale.set(-1, 1, 1);
        this.mesh.rotation.z=__WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SKYBOX_OPTIONS */].angleOfSlope;
        //this.skyBox.eulerOrder = 'XZY';
        //this.skyBox.renderDepth = 1000.0;
    }

    movement() {
        this.mesh.rotation.x+=__WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SKYBOX_OPTIONS */].rotationSpeed;
    }

    increaseMovementSpeed() {
        __WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SKYBOX_OPTIONS */].rotationSpeed+=__WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SKYBOX_OPTIONS */].increaseStep;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SkyBox;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);




class GameField extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
    }

    createMesh() {
        const texture = new THREE.TextureLoader().load( __WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GAMEFIELD_OPTIONS */].link );
        const geometry = new THREE.SphereGeometry(__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GAMEFIELD_OPTIONS */].radius,__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GAMEFIELD_OPTIONS */].segmentsQuantity,__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GAMEFIELD_OPTIONS */].segmentsQuantity);
        const material = new THREE.MeshStandardMaterial({map: texture});
        // material.transparent=true;
        // material.opacity=0;
        this.mesh = new THREE.Mesh( geometry, material );
        this.setPosition();
    }

    setPosition() {
        this.mesh.position.y=-30.5;
        this.mesh.rotation.z=__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GAMEFIELD_OPTIONS */].angleOfSlope;
    }

    movement() {
        this.mesh.rotation.x += __WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GAMEFIELD_OPTIONS */].rotationSpeed;
    }

    increaseMovementSpeed() {
        this.mesh.rotation.x=0;
        __WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GAMEFIELD_OPTIONS */].rotationSpeed+=__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GAMEFIELD_OPTIONS */].increaseStep;
    }

    isWholeCircle() {
        return this.mesh.rotation.x>__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GAMEFIELD_OPTIONS */].wholeCircle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameField;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class Spaceship extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
        this.lastTurnCoordinateX=0;
    }

    createMesh() {
        this.mesh = new THREE.Object3D();
        this.plane = new THREE.ObjectLoader();
        this.plane.load( __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SPACESHIP_OPTIONS */].link, ( obj ) => {
            this.mesh.add(obj);
        });
        this.setPosition();
    }

    setPosition() {
        this.mesh.position.z = __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SPACESHIP_OPTIONS */].inIntroCoordinates.z;
        this.mesh.position.y = __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SPACESHIP_OPTIONS */].inIntroCoordinates.y;
    }

    listenSpaceshipMove() {
        document.addEventListener('mousemove', this.setMouseMoveListener.bind(this));
    }

    setMouseMoveListener(event) {
        let tx = -1 + (event.clientX / __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* WINDOW_OPTIONS */].gameWindowWidth)*2;
        let ty = 1 - (event.clientY / __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* WINDOW_OPTIONS */].gameWindowHeight)*2;

        const currentX = this.normalizePosition(tx, -1, 1, -__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SPACESHIP_OPTIONS */].flyWidthBorder, __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SPACESHIP_OPTIONS */].flyWidthBorder);
        const currentY = this.normalizePosition(ty, -1, 1, -0.62, 1.8);//-SPACESHIP_OPTIONS.flyHeightBorder+1,SPACESHIP_OPTIONS.flyHeightBorder+0.5);

        this.mesh.position.x = currentX;
        this.mesh.position.y = currentY;

        this.turning(currentX);
    }

    turning(currentX) {
        if (currentX>this.lastTurnCoordinateX) {
            this.mesh.rotation.z += __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SPACESHIP_OPTIONS */].turningSpeed;
        }
        else {
            this.mesh.rotation.z -= __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SPACESHIP_OPTIONS */].turningSpeed;
        }
        this.lastTurnCoordinateX = currentX;
    }

    isSpaceshipNotMove(lastSpaceshipPosition) {
        return (lastSpaceshipPosition===this.lastTurnCoordinateX) ||
            (this.mesh.rotation.z!==0);
    }

    alignSpaceship() {
        if (this.mesh.rotation.z > __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SPACESHIP_OPTIONS */].alignmentPosition) {
            this.mesh.rotation.z -= __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SPACESHIP_OPTIONS */].turningBackSpeed;
        }
        else {
            this.mesh.rotation.z += __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SPACESHIP_OPTIONS */].turningBackSpeed;
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Spaceship;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class Enemy extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();

        const plane=new THREE.ObjectLoader();
        plane.load( __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* ENEMY_OPTIONS */].link, ( obj ) => {
            this.mesh.add(obj);
        });
    }

    setRandomPosition() {
        let xpos = -13+Math.random()*(26);//-3.4+Math.random()*(6.8);
        let ypos = 30+Math.random()*(1.8);//31+Math.random()*(1.5);
        let zpos = -10.5+Math.random()*(21);//-5.5+Math.random()*(5.5);

        this.mesh.position.x = xpos;//2
        this.mesh.position.y = ypos;//31
        this.mesh.position.z = zpos;//2
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Enemy;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class EnemiesContainer extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */]{
    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
    }

    setPrimaryPosition() {
        this.mesh.position.z=__WEBPACK_IMPORTED_MODULE_1__Constants__["b" /* FIGHTERSCONTAINER_OPTIONS */].distanceCoordinates.z;
        this.mesh.position.y=__WEBPACK_IMPORTED_MODULE_1__Constants__["b" /* FIGHTERSCONTAINER_OPTIONS */].distanceCoordinates.y;
    }

    isBehindCamera() {
        return this.mesh.position.z>__WEBPACK_IMPORTED_MODULE_1__Constants__["b" /* FIGHTERSCONTAINER_OPTIONS */].maxZCoordinate;
    }

    movement() {
        this.mesh.position.z+=__WEBPACK_IMPORTED_MODULE_1__Constants__["b" /* FIGHTERSCONTAINER_OPTIONS */].flySpeed;
    }

    increaseMovementSpeed() {
        __WEBPACK_IMPORTED_MODULE_1__Constants__["b" /* FIGHTERSCONTAINER_OPTIONS */].flySpeed+=__WEBPACK_IMPORTED_MODULE_1__Constants__["b" /* FIGHTERSCONTAINER_OPTIONS */].increaseStep;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EnemiesContainer;



/***/ })
/******/ ]);
//# sourceMappingURL=Build.js.map