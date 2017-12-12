import GameProcess from "./GameProcess";

class XWingTransporterGame {
    constructor() {
        this.setLoadListener();
    }

    setLoadListener() {
        window.addEventListener('load',() => {
            (new GameProcess()).init();
        });
    }
}

new XWingTransporterGame();
