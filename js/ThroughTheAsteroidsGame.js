import GameProcess from "./GameProcess";

class ThroughTheAsteroidsGame {
    constructor() {
        this.setLoadListener();
    }

    setLoadListener() {
        window.addEventListener('load',() => {
            (new GameProcess()).init();
        });
    }
}

new ThroughTheAsteroidsGame();
