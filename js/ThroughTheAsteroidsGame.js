import GameStarter from "./GameStarter";
import {ASTEROID_OPTIONS} from "./Constants";


class ThroughTheAsteroidsGame {
    constructor() {
        this.setLoadListener();
    }

    setLoadListener() {
        window.addEventListener('load',() => {
            (new GameStarter()).init();
        });
    }
}

new ThroughTheAsteroidsGame();
