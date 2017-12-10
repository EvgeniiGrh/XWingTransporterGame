import ShapeCreator from "./ShapeCreator";
import {ASTEROID_OPTIONS} from "./Constants";

export default class Asteroid extends ShapeCreator {

    constructor() {
        super();
    }

    createMesh() {
        this.mesh=new THREE.Object3D();

        const plane=new THREE.ObjectLoader();
        plane.load( './src/JSON_Models/TIE_Fighter.json', ( obj ) => {
            //for(let i=0;i<5;i++) {
                //ASTEROID_OPTIONS.object[i]=obj;
            //}
            //console.log(ASTEROID_OPTIONS.object);
            this.mesh.add(obj);
        });

        //this.mesh.add(ASTEROID_OPTIONS.object.pop());

        /*const sphereGeometry = new THREE.DodecahedronGeometry( ASTEROID_OPTIONS.radius, ASTEROID_OPTIONS.detail);
        const sphereMaterial = new THREE.MeshStandardMaterial( { color: ASTEROID_OPTIONS.color ,shading: THREE.FlatShading} );
        this.mesh = new THREE.Mesh( sphereGeometry, sphereMaterial );*/
    }

    setPosition() {//x,y,z
        let xpos=-20+Math.random()*(30);//-3.4+Math.random()*(6.8);
        let ypos=30+Math.random()*(4);//31+Math.random()*(1.5);
        let zpos=-5.5+Math.random()*(10.5);//-5.5+Math.random()*(5.5);

        this.mesh.position.x=xpos;//2
        this.mesh.position.y=ypos;//31
        this.mesh.position.z=zpos;//2
    }

    setRotationSpeed() {//rotationSpeed
        this.rotationSpeed=Math.random()/10;
    }

    rotate() {
        this.mesh.rotation.z+=this.rotationSpeed;//ASTEROID_OPTIONS.rotationSpeed;
    }

    step(z) {
        this.mesh.position.z+=z;//2
    }
}
