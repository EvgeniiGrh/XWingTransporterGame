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

export const ENEMIES_OPTIONS = {
    object: [],
    link: './res/JSON_Models/TIE_Fighter.json',
    minQuantity: 33,
    interval: 12,
    positionBorders: {
        xBottomBorder: -3,
        xInterval: 6,
        yBottomBorder: 29.5,
        yInterval: 3,
        zBottomBorder: -19,
        zInterval: 38
    }
};

export const SKYBOX_OPTIONS = {
    link: './res/images/hubble-min.jpg',
    radius: 1100,
    segmentsQuantity: 300,
    angleOfSlope: Math.PI/3,
    rotationSpeed: 0.0006,
    increaseStep: 0.0000002
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
        y: 1.2,
        z: 3.6
    },

    flyWidthBorder: WINDOW_OPTIONS.gameWindowWidth*0.0023,
    flyHeightBorder: WINDOW_OPTIONS.gameWindowHeight*0.0023,
    flyYTopMaxCoordinate: 2.5,
    flyYBottomMaxCoordinate: -0.52,
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
        z: -90
    },
    maxZCoordinate: 27,
    coordinateZToPlaySound: 0
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
        farPlane: 1250
    },

    rendererOptions: {
        pixelRatio: 7
    }

};

export const AUDIO_OPTIONS = {
    mainAudioLink: './sounds/MainSound.mp3',
    fightersFlyAudioLink: './sounds/FightersFly.mp3',
    failAudioLink: './sounds/FinalSound.mp3',
    menuAudioLink: './sounds/MenuSound.mp3'
};

export const STARCRUISER_OPTIONS = {
    link: './res/JSON_Models/destroyer.json',
    distanceCoordinates: {
        x: 0,
        y: 6,
        z: -165
    },
    turningAngle: 0.01
};

export const FINISH_OPTIONS = {
    finishCode: 222
};
