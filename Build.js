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
/* harmony export (immutable) */ __webpack_exports__["i"] = WINDOW_OPTIONS;


const GAMEFIELD_OPTIONS = {
    rotationSpeed: 0.01
};
/* harmony export (immutable) */ __webpack_exports__["c"] = GAMEFIELD_OPTIONS;


const PLANET_OPTIONS = {
    link: './src/images/LL.jpg',
    radius: 30,
    segmentsQuantity: 90
};
/* harmony export (immutable) */ __webpack_exports__["e"] = PLANET_OPTIONS;


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
    rotationSpeed: 0.0005
};
/* harmony export (immutable) */ __webpack_exports__["g"] = SKYBOX_OPTIONS;


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
/* harmony export (immutable) */ __webpack_exports__["h"] = SPACESHIP_OPTIONS;


const FIGHTERSCONTAINER_OPTIONS = {
    flyStep: 0.5,
    distanceCoordinates: {
        y: -30,
        z: -120
    },
    maxZCoordinate: 11
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
/* harmony export (immutable) */ __webpack_exports__["f"] = SCENE3D_OPTIONS;




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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameProcess__ = __webpack_require__(11);


class ThroughTheAsteroidsGame {
    constructor() {
        this.setLoadListener();
    }

    setLoadListener() {
        window.addEventListener('load',() => {
            (new __WEBPACK_IMPORTED_MODULE_0__GameProcess__["a" /* default */]()).init();
        });
    }
}

new ThroughTheAsteroidsGame();


/***/ }),
/* 3 */,
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
        this.createCommonLight();
        this.createControls();
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.verticalFieldOfView,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.aspectRatio,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.nearPlane,
            __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.farPlane);

        this.camera.position.y = __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inIntroCoordinates.y;
        this.camera.position.z = __WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inIntroCoordinates.z;
        this.scene.add(this.camera);
    }

    createCommonLight() {
        this.light = new THREE.AmbientLight();
        this.scene.add(this.light);
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        this.renderer.setPixelRatio(__WEBPACK_IMPORTED_MODULE_0__Constants__["f" /* SCENE3D_OPTIONS */].rendererOptions.pixelRatio);
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
            texture: { type: 't', value: new THREE.TextureLoader().load(__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].link)}
        };

        const material = new THREE.ShaderMaterial( {
            uniforms:       uniforms,
            vertexShader:  __WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GLSL_MODULES */].sky_vertex,
            fragmentShader: __WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* GLSL_MODULES */].sky_fragment
        });

        const geometry = new THREE.SphereGeometry(__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].radius,__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].segmentsQuantity,__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].segmentsQuantity);
        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.scale.set(-1, 1, 1);
        //this.skyBox.eulerOrder = 'XZY';
        //this.skyBox.renderDepth = 1000.0;
    }

    movement() {
        this.rotate();
    }

    rotate() {
        this.mesh.rotation.x+=__WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* SKYBOX_OPTIONS */].rotationSpeed;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SkyBox;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Planet__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Constants__ = __webpack_require__(0);





class GameField extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
        this.planet=new __WEBPACK_IMPORTED_MODULE_1__Planet__["a" /* default */]();
        this.mesh.add(this.planet.mesh);
        this.setPosition();
    }

    setPosition() {
        this.mesh.position.y=-30.5;
    }

    movement() {
        this.rotate();
    }

    rotate() {
        this.mesh.rotation.x += __WEBPACK_IMPORTED_MODULE_2__Constants__["c" /* GAMEFIELD_OPTIONS */].rotationSpeed;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameField;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class Planet extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {
    constructor() {
        super();
    }

    createMesh() {
        const texture = new THREE.TextureLoader().load( __WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* PLANET_OPTIONS */].link );
        const geometry = new THREE.SphereGeometry(__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* PLANET_OPTIONS */].radius,__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* PLANET_OPTIONS */].segmentsQuantity,__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* PLANET_OPTIONS */].segmentsQuantity);
        const material = new THREE.MeshStandardMaterial({map: texture});
        this.mesh = new THREE.Mesh( geometry, material );
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Planet;



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
    }

    createMesh() {
        this.mesh = new THREE.Object3D();
        this.plane = new THREE.ObjectLoader();
        this.plane.load( __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].link, ( obj ) => {
            this.mesh.add(obj);
        });
        this.setPosition();
    }

    setPosition() {
        this.mesh.position.z = __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].inIntroCoordinates.z;
        this.mesh.position.y = __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].inIntroCoordinates.y;
    }

    listenSpaceshipMove() {
        document.addEventListener('mousemove', this.setMouseMoveListener.bind(this));
    }

    setMouseMoveListener(event) {
        let tx = -1 + (event.clientX / __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* WINDOW_OPTIONS */].gameWindowWidth)*2;
        let ty = 1 - (event.clientY / __WEBPACK_IMPORTED_MODULE_1__Constants__["i" /* WINDOW_OPTIONS */].gameWindowHeight)*2;

        const currentX = this.normalizePosition(tx, -1, 1, -__WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].flyWidthBorder, __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].flyWidthBorder);
        const currentY = this.normalizePosition(ty, -1, 1, -0.5, 1.5);//-SPACESHIP_OPTIONS.flyHeightBorder+1,SPACESHIP_OPTIONS.flyHeightBorder+0.5);

        this.mesh.position.x = currentX;
        this.mesh.position.y = currentY;

        this.turning(currentX);
    }

    turning(currentX) {
        if (currentX>this.lastTurnCoordinateX) {
            this.mesh.rotation.z += __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].turningSpeed;
        }
        else {
            this.mesh.rotation.z -= __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].turningSpeed;
        }
        this.lastTurnCoordinateX = currentX;
    }

    alignSpaceship() {
        if (this.mesh.rotation.z > __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].alignmentPosition) {
            this.mesh.rotation.z -= __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].turningBackSpeed;
        }
        else {
            this.mesh.rotation.z += __WEBPACK_IMPORTED_MODULE_1__Constants__["h" /* SPACESHIP_OPTIONS */].turningBackSpeed;
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
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scene3D__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SkyBox__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameField__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Spaceship__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Enemy__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__EnemiesContainer__ = __webpack_require__(13);
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
        if (this.scene3D.camera.position.z > __WEBPACK_IMPORTED_MODULE_6__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.z) {
            this.scene3D.camera.position.z--;
        }
        if (this.scene3D.camera.position.y > __WEBPACK_IMPORTED_MODULE_6__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.y) {
            this.scene3D.camera.position.y--;
        }

        //DEBUG IT
        if (this.spaceship.mesh.position.z > __WEBPACK_IMPORTED_MODULE_6__Constants__["h" /* SPACESHIP_OPTIONS */].inGameCoordinates.z) {
            this.spaceship.mesh.position.z--;
        }
        if (this.spaceship.mesh.position.y > __WEBPACK_IMPORTED_MODULE_6__Constants__["h" /* SPACESHIP_OPTIONS */].inGameCoordinates.y) {
            this.spaceship.mesh.position.y--;
        }
    }

    isIntroEnd() {
        if (this.scene3D.camera.position.y === __WEBPACK_IMPORTED_MODULE_6__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.y &&
            this.scene3D.camera.position.z === __WEBPACK_IMPORTED_MODULE_6__Constants__["f" /* SCENE3D_OPTIONS */].cameraOptions.inGameCoordinates.z) {
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

        this.fightersContainer= new __WEBPACK_IMPORTED_MODULE_5__EnemiesContainer__["a" /* default */]();
        this.fightersContainer.setPrimaryPosition();
        this.movingObjects.push(this.fightersContainer);

        for(let i=0;i<enemiesQuantity;i++) {
            this.enemy = new __WEBPACK_IMPORTED_MODULE_4__Enemy__["a" /* default */]();
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
/* harmony export (immutable) */ __webpack_exports__["a"] = GameProcess;



/***/ }),
/* 12 */
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
        let xpos = -10+Math.random()*(20);//-3.4+Math.random()*(6.8);
        let ypos = 30+Math.random()*(2.5);//31+Math.random()*(1.5);
        let zpos = -5.5+Math.random()*(10.5);//-5.5+Math.random()*(5.5);

        this.mesh.position.x = xpos;//2
        this.mesh.position.y = ypos;//31
        this.mesh.position.z = zpos;//2
    }

    setRotationSpeed() {//rotationSpeed
        this.rotationSpeed = Math.random()/10;
    }

    rotate() {
        this.mesh.rotation.z += this.rotationSpeed;//ASTEROID_OPTIONS.rotationSpeed;
    }

    step(z) {
        this.mesh.position.z += z;//2
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Enemy;



/***/ }),
/* 13 */
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
        this.flyStep();
    }

    flyStep() {
        this.mesh.position.z+=__WEBPACK_IMPORTED_MODULE_1__Constants__["b" /* FIGHTERSCONTAINER_OPTIONS */].flyStep;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EnemiesContainer;



/***/ })
/******/ ]);
//# sourceMappingURL=Build.js.map