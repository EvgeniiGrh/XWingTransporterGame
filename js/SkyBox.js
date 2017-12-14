import ShapeCreator from "./ShapeCreator";
import {GLSL_MODULES, SKYBOX_OPTIONS} from "./Constants";

export default class SkyBox extends ShapeCreator  {

    constructor() {
        super();
        this.rotationSpeed=SKYBOX_OPTIONS.rotationSpeed;
    }

    createMesh() {
        const uniforms = {
            texture: { type: 't', value: new THREE.TextureLoader().load(SKYBOX_OPTIONS.link)}
        };

        const material = new THREE.ShaderMaterial( {
            uniforms:       uniforms,
            vertexShader:  GLSL_MODULES.sky_vertex,
            fragmentShader: GLSL_MODULES.sky_fragment
        });

        const geometry = new THREE.SphereGeometry(SKYBOX_OPTIONS.radius,SKYBOX_OPTIONS.segmentsQuantity,SKYBOX_OPTIONS.segmentsQuantity);
        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.scale.set(-1, 1, 1);
        this.mesh.rotation.z=SKYBOX_OPTIONS.angleOfSlope;
        //this.skyBox.eulerOrder = 'XZY';
        //this.skyBox.renderDepth = 1000.0;
    }

    movement() {
        this.mesh.rotation.x+=this.rotationSpeed;
    }

    increaseMovementSpeed() {
        this.rotationSpeed+=SKYBOX_OPTIONS.increaseStep;
    }
}
