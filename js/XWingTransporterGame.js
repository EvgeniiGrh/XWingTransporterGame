import GameProcess from "./GameProcess";

class XWingTransporterGame {
    constructor() {
        this.menu=document.querySelector("#menu");
        this.menuScreen = document.querySelector("#menu-screen");
        this.playButton=document.querySelector("#play");
        this.setPlayListener();
    }

    setPlayListener() {
        this.playButton.addEventListener("click", () => {
            this.addLoadingPanel();
            this.startLoading();
        });
    }

    addLoadingPanel() {
        this.menu.classList.add("hide");
        this.loading = document.createElement("div");
        this.loading.classList = "loading";
        this.menuScreen.appendChild(this.loading);
    }

    startLoading() {
        let percent = 3;
        this.game=new GameProcess();
        this.game.init();

        let id = setInterval(() => {
            if(percent === 103) {
                this.menuScreen.classList.add("hide");
                document.body.classList.add("hide-cursor");
                this.game.startIntro();
                this.setPauseListener();
                clearInterval(id);
            }
            this.loading.innerText = `${percent}`+"%";
            percent += 5;
        }, 250);
        this.loading.innerText = `${percent}`+"%";
    }

    setPauseListener() {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode===27) {
                this.game.pause();
            }
        });
    }
}

new XWingTransporterGame();
