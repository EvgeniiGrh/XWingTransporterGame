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
        const game=new GameProcess();
        game.init();

        let id = setInterval(() => {
            if(percent === 103) {
                this.menuScreen.classList.add("hide");
                document.body.classList.add("hide-cursor");
                game.startIntro();
                clearInterval(id);
            }
            this.loading.innerText = `${percent}`+"%";
            percent += 5;
        }, 250);
        this.loading.innerText = `${percent}`+"%";
    }
}

new XWingTransporterGame();
