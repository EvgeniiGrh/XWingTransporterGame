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
/* harmony export (immutable) */ __webpack_exports__["c"] = GLSL_MODULES;


const WINDOW_OPTIONS = {
    gameWindowHeight: window.innerHeight,
    gameWindowWidth: window.innerWidth,
};
/* harmony export (immutable) */ __webpack_exports__["g"] = WINDOW_OPTIONS;


const GAMEFIELD_OPTIONS = {
    rotationSpeed: 0.001
};
/* harmony export (immutable) */ __webpack_exports__["b"] = GAMEFIELD_OPTIONS;


const PLANET_OPTIONS = {
    link: './src/images/LL.jpg',
    radius: 30,
    segmentsQuantity: 90
};
/* harmony export (immutable) */ __webpack_exports__["d"] = PLANET_OPTIONS;


const ASTEROID_OPTIONS = {
    rotationSpeed: 0.01,
    radius: 0.5,
    detail: 1,
    color: 0x5c3322
};
/* harmony export (immutable) */ __webpack_exports__["a"] = ASTEROID_OPTIONS;


const SKYBOX_OPTIONS = {
    link: './src/images/hubble-min.jpg',
    radius: 600,
    segmentsQuantity: 200,
    rotationSpeed: 0.0005
};
/* harmony export (immutable) */ __webpack_exports__["e"] = SKYBOX_OPTIONS;


const SPACESHIP_OPTIONS = {
    link: './src/JSON_Models/spaceship.json',
    dimensions: 0.5,
    color: 0x000000,
    flyWidthBorder: window.innerWidth*0.002,
    flyHeightBorder: window.innerHeight*0.002
};
/* harmony export (immutable) */ __webpack_exports__["f"] = SPACESHIP_OPTIONS;



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameStarter__ = __webpack_require__(3);



class ThroughTheAsteroidsGame {
    constructor() {
        this.setLoadListener();
    }

    setLoadListener() {
        window.addEventListener('load',() => {
            (new __WEBPACK_IMPORTED_MODULE_0__GameStarter__["a" /* default */]()).init();
        });
    }
}

new ThroughTheAsteroidsGame();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Scene3D__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SkyBox__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameField__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Spaceship__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Asteroid__ = __webpack_require__(9);






class GameStarter {
    constructor() {
        this.asteroids=[];
    };

    init() {
        this.scene3D = new __WEBPACK_IMPORTED_MODULE_0__Scene3D__["a" /* default */]();

        let axis = new THREE.AxisHelper(500);//add temporary Axises
        this.scene3D.scene.add(axis);

        this.skyBox = new __WEBPACK_IMPORTED_MODULE_1__SkyBox__["a" /* default */]();
        this.scene3D.scene.add(this.skyBox.mesh);

        this.gameField = new __WEBPACK_IMPORTED_MODULE_2__GameField__["a" /* default */]();
        this.scene3D.scene.add(this.gameField.mesh);

        this.spaceship = new __WEBPACK_IMPORTED_MODULE_3__Spaceship__["a" /* default */]();
        this.scene3D.scene.add(this.spaceship.mesh);

        this.animateIntro();
    }

    addAsteroids() {
        this.asteroidsQuantity=Math.floor(5+Math.random()*8);

        this.asteroidsContainer=new THREE.Object3D();

        for(let i=0;i<this.asteroidsQuantity;i++){
            this.asteroid = new __WEBPACK_IMPORTED_MODULE_4__Asteroid__["a" /* default */]();
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
/* harmony export (immutable) */ __webpack_exports__["a"] = GameStarter;



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
        this.createCommonLight();
        this.createControls();
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(60, __WEBPACK_IMPORTED_MODULE_0__Constants__["g" /* WINDOW_OPTIONS */].gameWindowWidth / __WEBPACK_IMPORTED_MODULE_0__Constants__["g" /* WINDOW_OPTIONS */].gameWindowHeight, 0.1, 1000);
        this.camera.position.z = 96;
        this.camera.position.y = 91;
        this.scene.add(this.camera);
    }

    createCommonLight() {
        this.light = new THREE.AmbientLight();
        this.scene.add(this.light);
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        this.renderer.setPixelRatio(7);
        this.renderer.setClearColor(0x5342f4, 1);
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
            texture: { type: 't', value: new THREE.TextureLoader().load(__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* SKYBOX_OPTIONS */].link)}
        };

        const material = new THREE.ShaderMaterial( {
            uniforms:       uniforms,
            vertexShader:  __WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GLSL_MODULES */].sky_vertex,
            fragmentShader: __WEBPACK_IMPORTED_MODULE_1__Constants__["c" /* GLSL_MODULES */].sky_fragment
        });

        const geometry = new THREE.SphereGeometry(__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* SKYBOX_OPTIONS */].radius,__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* SKYBOX_OPTIONS */].segmentsQuantity,__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* SKYBOX_OPTIONS */].segmentsQuantity);
        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.scale.set(-1, 1, 1);
        //this.skyBox.eulerOrder = 'XZY';
        //this.skyBox.renderDepth = 1000.0;
    }

    setPosition() {}

    rotate() {
        this.mesh.rotation.x+=__WEBPACK_IMPORTED_MODULE_1__Constants__["e" /* SKYBOX_OPTIONS */].rotationSpeed;
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

    rotate() {
        this.mesh.rotation.x += __WEBPACK_IMPORTED_MODULE_2__Constants__["b" /* GAMEFIELD_OPTIONS */].rotationSpeed;
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
        const texture = new THREE.TextureLoader().load( __WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* PLANET_OPTIONS */].link );
        const geometry = new THREE.SphereGeometry(__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* PLANET_OPTIONS */].radius,__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* PLANET_OPTIONS */].segmentsQuantity,__WEBPACK_IMPORTED_MODULE_1__Constants__["d" /* PLANET_OPTIONS */].segmentsQuantity);
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
    }

    createMesh() {
        this.mesh=new THREE.Object3D();
        this.plane = new THREE.ObjectLoader();
        this.plane.load( __WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SPACESHIP_OPTIONS */].link, ( obj ) => {
            this.mesh.add(obj);
        });
        this.setPosition();
    }

    setPosition() {
        this.mesh.position.z = 92.6;
        this.mesh.position.y=88.3;
    }

    setMouseMoveListener(event) {
        let tx = -1 + (event.clientX / __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* WINDOW_OPTIONS */].gameWindowWidth)*2;
        let ty = 1 - (event.clientY / __WEBPACK_IMPORTED_MODULE_1__Constants__["g" /* WINDOW_OPTIONS */].gameWindowHeight)*2;

        this.mesh.position.x=this.normalizePosition(tx, -1, 1, -__WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SPACESHIP_OPTIONS */].flyWidthBorder, __WEBPACK_IMPORTED_MODULE_1__Constants__["f" /* SPACESHIP_OPTIONS */].flyWidthBorder);
        this.mesh.position.y=this.normalizePosition(ty, -1, 1, -0.5, 1.5);//-SPACESHIP_OPTIONS.flyHeightBorder+1,SPACESHIP_OPTIONS.flyHeightBorder+0.5);
    }

    normalizePosition(v,vmin,vmax,tmin,tmax) {
        let nv = Math.max(Math.min(v,vmax), vmin);
        let dv = vmax-vmin;
        let pc = (nv-vmin)/dv;
        let dt = tmax-tmin;
        let tv = tmin + (pc*dt);
        return tv;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Spaceship;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(0);



class Asteroid extends __WEBPACK_IMPORTED_MODULE_0__ShapeCreator__["a" /* default */] {

    constructor() {
        super();
    }

    createMesh() {
        const sphereGeometry = new THREE.DodecahedronGeometry( __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* ASTEROID_OPTIONS */].radius, __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* ASTEROID_OPTIONS */].detail);
        const sphereMaterial = new THREE.MeshStandardMaterial( { color: __WEBPACK_IMPORTED_MODULE_1__Constants__["a" /* ASTEROID_OPTIONS */].color ,shading: THREE.FlatShading} );
        this.mesh = new THREE.Mesh( sphereGeometry, sphereMaterial );
    }

    setPosition(x,y,z) {
        this.mesh.position.x=x;//2
        this.mesh.position.y=y;//31
        this.mesh.position.z=z;//2
    }

    setRotationSpeed(rotationSpeed) {
        this.rotationSpeed=rotationSpeed;
    }

    rotate() {
        this.mesh.rotation.z+=this.rotationSpeed;//ASTEROID_OPTIONS.rotationSpeed;
    }

    step(z) {
        this.mesh.position.z+=z;//2
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Asteroid;



/***/ })
/******/ ]);
//# sourceMappingURL=Build.js.map