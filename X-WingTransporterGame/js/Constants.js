export const GLSL_MODULES = {
    sky_vertex: "varying vec2 vUV; void main() {vUV = uv;vec4 pos = vec4(position, 1.0);gl_Position = projectionMatrix * modelViewMatrix * pos;}",
    sky_fragment: "uniform sampler2D texture;varying vec2 vUV;void main() {vec4 sample = texture2D(texture, vUV);gl_FragColor = vec4(sample.xyz, sample.w);}"
};

export const WINDOW_OPTIONS = {
    gameWindowHeight: window.innerHeight,
    gameWindowWidth: window.innerWidth,
};

export const GAMEFIELD_OPTIONS = {
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

export const ENEMY_OPTIONS = {
    object: [],
    link: './res/JSON_Models/TIE_Fighter.json',
    // rotationSpeed: 0.01,
    // radius: 0.5,
    // detail: 1,
    // color: 0x5c3322
};

export const SKYBOX_OPTIONS = {
    link: './res/images/hubble-min.jpg',
    radius: 600,
    segmentsQuantity: 200,
    angleOfSlope: Math.PI/3,
    rotationSpeed: 0.0006,
    increaseStep: 0.00000002//0.0002
};

export const SPACESHIP_OPTIONS = {
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

export const FIGHTERSCONTAINER_OPTIONS = {
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

export const SCENE3D_OPTIONS = {
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
        farPlane: 1000
    },

    rendererOptions: {
        pixelRatio: 7
    }

};

export const AUDIO_OPTIONS = {
    mainAudioLink: './sounds/MainSound.mp3',
    fightersFlyAudioLink: './sounds/FightersFly.mp3',
    failAudioLink: './sounds/R2D2.mp3',
};

export const STARCRUISER_OPTIONS = {
    link: './res/JSON_Models/destroyer.json',
    distanceCoordinates: {
        x: 0,
        y: 15,
        z: -145
    },
    turningAngle: 0.03
};

export const FINISH_OPTIONS = {
    finishCode: 222
};
