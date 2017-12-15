import {SCENE3D_OPTIONS} from "./Constants";
import Audio from "./Audio";

export default class Scene3D {
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
        this.createControls();
    }

    createAudio() {
        this.audio=new Audio();
        this.camera.add(this.audio.listener);
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            SCENE3D_OPTIONS.cameraOptions.verticalFieldOfView,
            SCENE3D_OPTIONS.cameraOptions.aspectRatio,
            SCENE3D_OPTIONS.cameraOptions.nearPlane,
            SCENE3D_OPTIONS.cameraOptions.farPlane);

        this.setCameraPrimaryPosition();
        this.scene.add(this.camera);
    }

    setCameraPrimaryPosition() {
        this.camera.position.y = SCENE3D_OPTIONS.cameraOptions.inIntroCoordinates.y;
        this.camera.position.z = SCENE3D_OPTIONS.cameraOptions.inIntroCoordinates.z;
    }

    createCommonLight() {
        this.light = new THREE.AmbientLight();
        this.scene.add(this.light);
    }

    createRenderer() {
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        this.renderer.setPixelRatio(SCENE3D_OPTIONS.rendererOptions.pixelRatio);
    }

    createControls() {
        this.controls = new THREE.TrackballControls(this.camera, this.canvas);
        this.controls.zoomSpeed = 0.5;
    }

    createLights() {
        this.pointLight = new THREE.PointLight(0xfff000, 1, 50);
        this.pointLight.position.set(0, 25, 1.2);
        this.scene.add(this.pointLight);

        const pointLightHelper = new THREE.PointLightHelper(this.pointLight, 4);
        this.scene.add(pointLightHelper);
    }
}
