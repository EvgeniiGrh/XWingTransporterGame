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
const GLSL_MODULES = {
    sky_vertex: "varying vec2 vUV; void main() {vUV = uv;vec4 pos = vec4(position, 1.0);gl_Position = projectionMatrix * modelViewMatrix * pos;}",
    sky_fragment: "uniform sampler2D texture;varying vec2 vUV;void main() {vec4 sample = texture2D(texture, vUV);gl_FragColor = vec4(sample.xyz, sample.w);}"
};
/* harmony export (immutable) */ __webpack_exports__["f"] = GLSL_MODULES;


const WINDOW_OPTIONS = {
    gameWindowHeight: window.innerHeight,
    gameWindowWidth: window.innerWidth,
};
/* harmony export (immutable) */ __webpack_exports__["k"] = WINDOW_OPTIONS;


const GAMEFIELD_OPTIONS = {
    link: './res/images/DS.jpg',
    radius: 30,
    segmentsQuantity: 90,
    angleOfSlope: Math.PI/3,
    Coordinates: {
      x: 0,
      y: -31,
      z: 0
    },
    rotationSpeed: 0.006,
    increaseStep: 0.003,
    wholeCircle: 2*Math.PI
};
/* harmony export (immutable) */ __webpack_exports__["e"] = GAMEFIELD_OPTIONS;


const ENEMY_OPTIONS = {
    object: [],
    link: './res/JSON_Models/TIE_Fighter.json',
};
/* harmony export (immutable) */ __webpack_exports__["b"] = ENEMY_OPTIONS;


const SKYBOX_OPTIONS = {
    link: './res/images/hubble-min.jpg',
    radius: 1100,
    segmentsQuantity: 300,
    angleOfSlope: Math.PI/3,
    rotationSpeed: 0.0006,
    increaseStep: 0.0000002//0.0002
};
/* harmony export (immutable) */ __webpack_exports__["h"] = SKYBOX_OPTIONS;


const SPACESHIP_OPTIONS = {
    link: './res/JSON_Models/spaceship.json',
    inIntroCoordinates: {
        x: 0,
        y: 89.3,
        z: 93.6
    },

    inGameCoordinates: {
        x: 0,
        y: 1.2,//1
        z: 3.6
    },

    flyWidthBorder: WINDOW_OPTIONS.gameWindowWidth*0.0023,
    flyHeightBorder: WINDOW_OPTIONS.gameWindowHeight*0.0023,
    turningSpeed: 0.02,
    turningBackSpeed: 0.014,
    alignmentPosition: 0,
    circle: 2*Math.PI
};
/* harmony export (immutable) */ __webpack_exports__["i"] = SPACESHIP_OPTIONS;


const FIGHTERSCONTAINER_OPTIONS = {
    flySpeed: 0.5,
    increaseStep: 0.04,
    distanceCoordinates: {
        x: 0,
        y: -30.2,
        z: -120
    },
    maxZCoordinate: 15,
    coordinateZToPlaySound: -14
};
/* harmony export (immutable) */ __webpack_exports__["c"] = FIGHTERSCONTAINER_OPTIONS;


const SCENE3D_OPTIONS = {
    cameraOptions: {
        inIntroCoordinates: {
            x: 0,
            y: 91,
            z: 98
        },

        inGameCoordinates: {
            x: 0,
            y: 1,
            z: 7//6
        },

        verticalFieldOfView: 60,
        aspectRatio: WINDOW_OPTIONS.gameWindowWidth / WINDOW_OPTIONS.gameWindowHeight,
        nearPlane: 0.1,
        farPlane: 1250
    },

    rendererOptions: {
        pixelRatio: 7
    }

};
/* harmony export (immutable) */ __webpack_exports__["g"] = SCENE3D_OPTIONS;


const AUDIO_OPTIONS = {
    mainAudioLink: './sounds/MainSound.mp3',
    fightersFlyAudioLink: './sounds/FightersFly.mp3',
    failAudioLink: './sounds/R2D2.mp3',
    menuAudioLink: './sounds/MenuSound.mp3'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = AUDIO_OPTIONS;


const STARCRUISER_OPTIONS = {
    link: './res/JSON_Models/destroyer.json',
    distanceCoordinates: {
        x: 0,
        y: 8,
        z: -165
    },
    turningAngle: 0.01
};
/* harmony export (immutable) */ __webpack_exports__["j"] = STARCRUISER_OPTIONS;


const FINISH_OPTIONS = {
    finishCode: 222
};
/* harmony export (immutable) */ __webpack_exports__["d"] = FINISH_OPTIONS;



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class XWingTransporterGame {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.menuScreen = document.querySelector("#menu-screen");
        this.menu=document.querySelector("#menu");
        this.menuSound=document.querySelector("#menuSound");

        this.historyButton=document.querySelector("#history");
        this.playButton=document.querySelector("#play");
        this.aboutButton=document.querySelector("#about");

        this.setPlayListener();
    }

    setPlayListener() {
        this.playButton.addEventListener("click", () => {
            this.addLoadingPanel();
            this.startLoading();
        });
    }

    addLoadingPanel() {
        this.menu.classList.add("hide");
        this.loading = document.createElement("div");
        this.loading.classList = "loading";
        this.menuScreen.appendChild(this.loading);
    }

    startLoading() {
        let percent = 3;
        this.game=new __WEBPACK_IMPORTED_MODULE_0__GameProcess__["a" /* default */](this.canvas);
        this.game.init();

        let id = setInterval(() => {
            if(percent === 103) {
                this.canvas.classList.add("hide-cursor");
                this.clearMenu();
                this.game.startIntro();
                this.setPauseListeners();
                clearInterval(id);
            }
            this.loading.innerText = `${percent}`+"%";
            percent += 5;
        }, 250);
        this.loading.innerText = `${percent}`+"%";
    }

    clearMenu() {
        this.menuScreen.removeChild(this.loading);
        this.menuScreen.classList.add("hide");
        this.menuSound.stop();

        this.menu.removeChild(this.playButton);
        this.menu.removeChild(this.historyButton);
        this.menu.removeChild(this.aboutButton);
    }

    setPauseListeners() {
        this.createPauseMenuElements();
        this.createPauseMenu();

        this.resumeButton.addEventListener('click', (event) => {
            this.game.pause(this.menuScreen);
        });

        this.restartButton.addEventListener('click', () => {
            this.canvas.classList.remove("hide");
            this.menuScreen.classList.add("hide");

            if (this.menu.lastChild===this.aboutButton) {
                this.menu.removeChild(this.aboutButton);
                this.menu.insertBefore(this.resumeButton, this.restartButton);
            }

            this.game.restart();
        });

        this.menuButton.addEventListener('click', () => {
            document.location.href="./index.html";
        });

        document.addEventListener('keydown', (event) => {
            if (event.keyCode===27) {
                this.game.pause(this.menuScreen);
            }

            if (event.keyCode===__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* FINISH_OPTIONS */].finishCode) {
                this.createFinishMenu();
                this.game.pause(this.menuScreen);
            }
        });

    }

    createPauseMenuElements() {
        this.menu.classList.remove("hide");

        this.restartButton=document.createElement('div');
        this.restartButton.classList.add("button");

        this.restartTitle=document.createElement('h3');
        this.restartTitle.innerText="RESTART";
        this.restartButton.appendChild(this.restartTitle);
        //--------------------------------------------------------------------
        this.resumeButton=document.createElement('div');
        this.resumeButton.classList.add("button");

        this.resumeTitle=document.createElement('h3');
        this.resumeTitle.innerText="RESUME";
        this.resumeButton.appendChild(this.resumeTitle);
        //--------------------------------------------------------------------
        this.menuButton=document.createElement('div');
        this.menuButton.classList.add("button");

        this.menuTitle=document.createElement('h3');
        this.menuTitle.innerText="MENU";
        this.menuButton.appendChild(this.menuTitle);
    }

    createPauseMenu() {
        this.menu.appendChild(this.resumeButton);
        this.menu.appendChild(this.restartButton);
        this.menu.appendChild(this.menuButton);
    }

    createFinishMenu() {
        this.menu.removeChild(this.resumeButton);
        this.menu.appendChild(this.aboutButton);
    }
}

new XWingTransporterGame();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scene3D__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SkyBox__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameField__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Spaceship__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enemy__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__EnemiesContainer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__StarCruiser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Constants__ = __webpack_require__(0);









class GameProcess {
    constructor(canvas) {
        this.movingObjects=[];
        this.enemiesArray=[];
        this.inGame=true;
        this.firstGame=true;
        this.lastSpaceshipPosition=null;
        this.canvas = canvas;
    };

    init() {
        this.scene3D = new __WEBPACK_IMPORTED_MODULE_0__Scene3D__["a" /* default */](this.canvas);

        this.skyBox = new __WEBPACK_IMPORTED_MODULE_1__SkyBox__["a" /* default */]();
        this.scene3D.scene.add(this.skyBox.mesh);
        this.movingObjects.push(this.skyBox);

        this.gameField = new __WEBPACK_IMPORTED_MODULE_2__GameField__["a" /* default */]();
        this.scene3D.scene.add(this.gameField.mesh);
        this.movingObjects.push(this.gameField);

        this.spaceship = new __WEBPACK_IMPORTED_MODULE_3__Spaceship__["a" /* default */]();
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
        if (this.scene3D.camera.position.z > __WEBPACK_IMPORTED_MODULE_7__Constants__["g" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.z) {
            this.scene3D.camera.position.z--;
        }
        if (this.scene3D.camera.position.y > __WEBPACK_IMPORTED_MODULE_7__Constants__["g" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.y) {
            this.scene3D.camera.position.y--;
        }

        //DEBUG IT
        if (this.spaceship.mesh.position.z > __WEBPACK_IMPORTED_MODULE_7__Constants__["i" /* SPACESHIP_OPTIONS */].inGameCoordinates.z) {
            this.spaceship.mesh.position.z--;
        }
        if (this.spaceship.mesh.position.y > __WEBPACK_IMPORTED_MODULE_7__Constants__["i" /* SPACESHIP_OPTIONS */].inGameCoordinates.y) {
            this.spaceship.mesh.position.y--;
        }
    }

    isIntroEnd() {
        if (this.scene3D.camera.position.y === __WEBPACK_IMPORTED_MODULE_7__Constants__["g" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.y &&
            this.scene3D.camera.position.z === __WEBPACK_IMPORTED_MODULE_7__Constants__["g" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.z) {
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
                this.spaceship.mesh.rotation.z=__WEBPACK_IMPORTED_MODULE_7__Constants__["i" /* SPACESHIP_OPTIONS */].turningBackSpeed;
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
        this.starCruiser= new __WEBPACK_IMPORTED_MODULE_6__StarCruiser__["a" /* default */]();
        this.scene3D.scene.add(this.starCruiser.mesh);

        const enemiesQuantity=Math.floor(35+Math.random()*10);

        this.fightersContainer= new __WEBPACK_IMPORTED_MODULE_5__EnemiesContainer__["a" /* default */]();
        this.fightersContainer.setPrimaryPosition();
        this.fightersContainer.setPrimarySpeed();
        this.movingObjects.push(this.fightersContainer);

        this.shipLoader=new THREE.ObjectLoader();
        this.shipLoader.load( __WEBPACK_IMPORTED_MODULE_7__Constants__["b" /* ENEMY_OPTIONS */].link, ( object ) => {

            for(let i=0;i<enemiesQuantity+1;i++) {
                let copy=object.clone();

                let enemy = new __WEBPACK_IMPORTED_MODULE_4__Enemy__["a" /* default */]();
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
        cancelAnimationFrame(this.animationFrameId);
        this.scene3D.audio.playFailSound();
        this.scene3D.audio.stopMainSound();

        this.showFinishWindow();
    }

    restart() {
        debugger;
        this.scene3D.scene.remove(this.fightersContainer.mesh);
        this.scene3D.audio.stopMainSound();

        this.movingObjects.forEach((item)=>{
            item.setPrimaryPosition();
            item.setPrimarySpeed();
        });

        this.spaceship.setPrimaryPosition();
        this.scene3D.setCameraPrimaryPosition();
        this.inGame=true;
        this.lastSpaceshipPosition=null;

        if (this.spaceship.inListening) {
            this.firstGame=false;
        }
        this.startIntro();
    }

    showFinishWindow() {
        const event = new Event("keydown");
        event.keyCode = __WEBPACK_IMPORTED_MODULE_7__Constants__["d" /* FINISH_OPTIONS */].finishCode;
        document.dispatchEvent(event);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameProcess;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Audio__ = __webpack_require__(5);



class Scene3D {
    constructor(canvas) {
        this.canvas = canvas;
        this.createScene();
    }

    createScene() {
        this.scene = new THREE.Scene();
        this.createCamera();
        this.createRenderer();
        //this.createCommonLight();
        this.createAudio();
    }

    createAudio() {
        this.audio=new __WEBPACK_IMPORTED_MODULE_1__Audio__["a" /* default */]();
        this.camera.add(this.audio.listener);
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            __WEBPACK_IMPORTED_MODULE_0__Constants__["g" /* SCENE3D_OPTIONS */].cameraOptions.verticalFieldOfView,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["g" /* SCENE3D_OPTIONS */].cameraOptions.aspectRatio,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["g" /* SCENE3D_OPTIONS */].cameraOptions.nearPlane,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["g" /* SCENE3D_OPTIONS */].cameraOptions.farPlane);

        this.setCameraPrimaryPosition();
        this.scene.add(this.camera);
    }

    setCameraPrimaryPosition() {
        this.camera.position.y = __WEBPACK_IMPORTED_MODULE_0__Constants__["g" /* SCENE3D_OPTIONS */].cameraOptions.inIntroCoordinates.y;
        this.camera.position.z = __WEBPACK_IMPORTED_MODULE_0__Constants__["g" /* SCENE3D_OPTIONS */].cameraOptions.inIntroCoordinates.z;
    }

    createCommonLight() {
        this.light = new THREE.AmbientLight();
        this.scene.add(this.light);
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        this.renderer.setPixelRatio(__WEBPACK_IMPORTED_MODULE_0__Constants__["g" /* SCENE3D_OPTIONS */].rendererOptions.pixelRatio);
    }

    createLights() {
        this.pointLight = new THREE.PointLight(0xfff000, 1, 50);
        this.pointLight.position.set(0, 25, 1.2);
        this.scene.add(this.pointLight);

        const pointLightHelper = new THREE.PointLightHelper(this.pointLight, 4);
        this.scene.add(pointLightHelper);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene3D;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(0);


class Audio {
    constructor() {
        this.loadSounds();
    }

    loadSounds() {
        this.listener = new THREE.AudioListener();
        this.audioLoader = new THREE.AudioLoader();

        this.loadMainSound();
        this.loadFightersFly();
        this.loadFailSound();
    }

    loadMainSound() {
        this.mainSound = new THREE.Audio( this.listener );
        this.audioLoader.load( __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* AUDIO_OPTIONS */].mainAudioLink, ( buffer ) => {
            this.mainSound.setBuffer( buffer );
            this.mainSound.setLoop( true );
            this.mainSound.setVolume( 0.4 );
        });
    }

    loadFightersFly() {
        this.fightersFly = new THREE.Audio( this.listener );
        this.audioLoader.load( __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* AUDIO_OPTIONS */].fightersFlyAudioLink, ( buffer ) => {
            this.fightersFly.setBuffer( buffer );
            this.fightersFly.setLoop( false );
            this.fightersFly.setVolume( 0.55 );
        });
    }

    loadFailSound() {
        this.failSound = new THREE.Audio( this.listener );
        this.audioLoader.load( __WEBPACK_IMPORTED_MODULE_0__Constants__["a" /* AUDIO_OPTIONS */].failAudioLink, ( buffer ) => {
            this.failSound.setBuffer( buffer );
            this.failSound.setLoop( false );
            this.failSound.setVolume( 1 );
        });
    }

    playMainSound() {
        this.mainSound.play();
    }

    stopMainSound() {
        this.mainSound.stop();
    }

    playFightersFly() {
        this.fightersFly.play();
    }

    playFailSound() {
        this.failSound.play();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Audio;



/***/ }),
/* 6 */
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
            texture: { type: 't', value: new THREE.TextureLoader().load(__WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SKYBOX_OPTIONS */].link)}
        };

        const material = new THREE.ShaderMaterial( {
            uniforms:       uniforms,
            vertexShader:  __WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* GLSL_MODULES */].sky_vertex,
            fragmentShader: __WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* GLSL_MODULES */].sky_fragment
        });

        const geometry = new THREE.SphereGeometry(__WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SKYBOX_OPTIONS */].radius,__WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SKYBOX_OPTIONS */].segmentsQuantity,__WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SKYBOX_OPTIONS */].segmentsQuantity);
        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.scale.set(-1, 1, 1);
        this.mesh.rotation.z=__WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SKYBOX_OPTIONS */].angleOfSlope;
        //this.skyBox.eulerOrder = 'XZY';
        //this.skyBox.renderDepth = 1000.0;
        this.setPrimaryPosition();
        this.setPrimarySpeed();
    }

    setPrimaryPosition() {
        this.mesh.rotation.x=0;
    }

    setPrimarySpeed() {
        this.movementSpeed=__WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SKYBOX_OPTIONS */].rotationSpeed;
    }

    movement() {
        this.mesh.rotation.x+=this.movementSpeed;
    }

    increaseMovementSpeed() {
        this.movementSpeed+=__WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SKYBOX_OPTIONS */].increaseStep;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SkyBox;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);




class GameField extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
    }

    createMesh() {
        const texture = new THREE.TextureLoader().load( __WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GAMEFIELD_OPTIONS */].link );
        const geometry = new THREE.SphereGeometry(__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GAMEFIELD_OPTIONS */].radius,__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GAMEFIELD_OPTIONS */].segmentsQuantity,__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GAMEFIELD_OPTIONS */].segmentsQuantity);
        const material = new THREE.MeshBasicMaterial({map: texture});
        this.mesh = new THREE.Mesh( geometry, material );
        this.setPrimaryPosition();
        this.setPrimarySpeed();
    }

    setPrimaryPosition() {
        this.mesh.position.y=__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GAMEFIELD_OPTIONS */].Coordinates.y;
        this.mesh.rotation.z=__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GAMEFIELD_OPTIONS */].angleOfSlope;
    }

    setPrimarySpeed() {
        this.movementSpeed=__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GAMEFIELD_OPTIONS */].rotationSpeed;
    }

    movement() {
        this.mesh.rotation.x += this.movementSpeed;
    }

    increaseMovementSpeed() {
        this.mesh.rotation.x=0;
        this.movementSpeed+=__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GAMEFIELD_OPTIONS */].increaseStep;
    }

    isWholeCircle() {
        return this.mesh.rotation.x>__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* GAMEFIELD_OPTIONS */].wholeCircle;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameField;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class Spaceship extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
        this.lastTurnCoordinateX=0;
        this.inListening=false;
    }

    createMesh() {
        this.mesh = new THREE.Object3D();
        this.plane = new THREE.ObjectLoader();
        this.plane.load( __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].link, ( object ) => {
            this.mesh.add(object);
        });
        this.setPrimaryPosition();
    }

    setPrimaryPosition() {
        this.mesh.position.z = __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].inIntroCoordinates.z;
        this.mesh.position.y = __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].inIntroCoordinates.y;
        this.mesh.rotation.z=0;
    }

    listenSpaceshipMove() {
        this.inListening=true;
        document.addEventListener('mousemove', this.mouseMoveListener.bind(this));
    }

    mouseMoveListener(event) {
        let tx = -1 + (event.clientX / __WEBPACK_IMPORTED_MODULE_1__Constants__["k" /* WINDOW_OPTIONS */].gameWindowWidth)*2;
        let ty = 1 - (event.clientY / __WEBPACK_IMPORTED_MODULE_1__Constants__["k" /* WINDOW_OPTIONS */].gameWindowHeight)*2;

        const currentX = this.normalizePosition(tx, -1, 1, -__WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].flyWidthBorder, __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].flyWidthBorder);
        const currentY = this.normalizePosition(ty, -1, 1, -0.52, 2.5);//-0.47, 1.6//-SPACESHIP_OPTIONS.flyHeightBorder+1,SPACESHIP_OPTIONS.flyHeightBorder+0.5);

        this.mesh.position.x = currentX;
        this.mesh.position.y = currentY;

        this.turning(currentX);
    }

    turning(currentX) {
        if (currentX>this.lastTurnCoordinateX) {
            this.mesh.rotation.z += __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].turningSpeed;
        }
        else {
            this.mesh.rotation.z -= __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].turningSpeed;
        }
        this.lastTurnCoordinateX = currentX;
    }

    isSpaceshipNotMove(lastSpaceshipPosition) {
        return (lastSpaceshipPosition===this.lastTurnCoordinateX) ||
            (this.mesh.rotation.z!==0);
    }

    alignSpaceship() {
        if (this.mesh.rotation.z > __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].alignmentPosition &&
            this.mesh.rotation.z < __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].circle ) {
            this.mesh.rotation.z -= __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].turningBackSpeed;
        }

        if (this.mesh.rotation.z < __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].alignmentPosition &&
            this.mesh.rotation.z >- __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].circle ) {
            this.mesh.rotation.z += __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].turningBackSpeed;
        }

        if (this.mesh.rotation.z > __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].circle ||
            this.mesh.rotation.z <- __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* SPACESHIP_OPTIONS */].circle) {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Spaceship;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);


class Enemy extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
    }

    setRandomPosition() {
        let xpos = -13+Math.random()*(26);
        let ypos = 29.5+Math.random()*(6);
        let zpos = -10.5+Math.random()*(20);

        this.mesh.position.x = xpos;
        this.mesh.position.y = ypos;
        this.mesh.position.z = zpos;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Enemy;



/***/ }),
/* 10 */
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
        this.mesh.position.z=__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].distanceCoordinates.z;
        this.mesh.position.y=__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].distanceCoordinates.y;
    }

    setPrimarySpeed() {
        this.movementSpeed=__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].flySpeed;
    }

    isBehindCamera() {
        return this.mesh.position.z>__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].maxZCoordinate;
    }

    isNearTheSpaceship() {
        return this.mesh.position.z>__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].coordinateZToPlaySound;
    }

    movement() {
        this.mesh.position.z+=this.movementSpeed;
    }

    increaseMovementSpeed() {
        this.movementSpeed+=__WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* FIGHTERSCONTAINER_OPTIONS */].increaseStep;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EnemiesContainer;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class StarCruiser extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
        this.ship=new THREE.ObjectLoader();
        this.ship.load( __WEBPACK_IMPORTED_MODULE_1__Constants__["j" /* STARCRUISER_OPTIONS */].link, ( object ) => {
            this.mesh.add(object);
        });

        this.setPrimaryPosition();
    }

    setPrimaryPosition() {
        this.mesh.position.z=__WEBPACK_IMPORTED_MODULE_1__Constants__["j" /* STARCRUISER_OPTIONS */].distanceCoordinates.z;
        this.mesh.position.y=__WEBPACK_IMPORTED_MODULE_1__Constants__["j" /* STARCRUISER_OPTIONS */].distanceCoordinates.y;
        this.mesh.rotation.y=Math.PI/2;
    }

    move() {
        if (this.mesh.rotation.y<Math.PI) {
            this.mesh.rotation.y+=__WEBPACK_IMPORTED_MODULE_1__Constants__["j" /* STARCRUISER_OPTIONS */].turningAngle;
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = StarCruiser;



/***/ })
/******/ ]);
//# sourceMappingURL=Build.js.map