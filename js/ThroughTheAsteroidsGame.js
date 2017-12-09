import GameStarter from "./GameStarter";


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
