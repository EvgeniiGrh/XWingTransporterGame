

export const GLSL_MODULES = {
    sky_vertex: "varying vec2 vUV; void main() {vUV = uv;vec4 pos = vec4(position, 1.0);gl_Position = projectionMatrix * modelViewMatrix * pos;}",
    sky_fragment: "uniform sampler2D texture;varying vec2 vUV;void main() {vec4 sample = texture2D(texture, vUV);gl_FragColor = vec4(sample.xyz, sample.w);}"
};

export const WINDOW_OPTIONS = {
    gameWindowHeight: window.innerHeight,
    gameWindowWidth: window.innerWidth,
};

export const GAMEFIELD_OPTIONS = {
    rotationSpeed: 0.001
};

export const PLANET_OPTIONS = {
    radius: 30,
    segmentsQuantity: 90
};

export const ASTEROID_OPTIONS = {
    rotationSpeed: 0.01,
    radius: 0.5,
    detail: 1,
    color: 0x5c3322
};

export const SKYBOX_OPTIONS = {
    radius: 600,
    segmentsQuantity: 200,
    rotationSpeed: 0.0005
};

export const SPACESHIP_OPTIONS = {
    dimensions: 0.5,
    color: 0x000000,
    flyWidthBorder: window.innerWidth*0.002,
    flyHeightBorder: window.innerHeight*0.002
};
