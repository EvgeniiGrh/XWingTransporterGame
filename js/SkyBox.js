import ShapeCreator from "./ShapeCreator";
import {SKYBOX_OPTIONS} from "./Constants";

export default class SkyBox extends ShapeCreator  {

    constructor() {
        super();
    }

    createMesh() {
        const sky_vertex="varying vec2 vUV; void main() {vUV = uv;vec4 pos = vec4(position, 1.0);gl_Position = projectionMatrix * modelViewMatrix * pos;}";
        const sky_fragment="uniform sampler2D texture;varying vec2 vUV;void main() {vec4 sample = texture2D(texture, vUV);gl_FragColor = vec4(sample.xyz, sample.w);}";

        const uniforms = {
            texture: { type: 't', value: THREE.ImageUtils.loadTexture("../src/images/hubble-min.jpg") }
        };

        const material = new THREE.ShaderMaterial( {
            uniforms:       uniforms,
            vertexShader:  sky_vertex,
            fragmentShader: sky_fragment
        });

        const geometry = new THREE.SphereGeometry(SKYBOX_OPTIONS.radius,SKYBOX_OPTIONS.segmentsQuantity,SKYBOX_OPTIONS.segmentsQuantity);
        this.mesh = new THREE.Mesh( geometry, material );
        this.mesh.scale.set(-1, 1, 1);
        //this.skyBox.eulerOrder = 'XZY';
        //this.skyBox.renderDepth = 1000.0;
    }

    setPosition() {}

    rotate() {
        this.mesh.rotation.x+=SKYBOX_OPTIONS.rotationSpeed;
    }
}
