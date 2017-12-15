import GameProcess from "./GameProcess";
import {FINISH_OPTIONS} from "./Constants";

class XWingTransporterGame {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.menuScreen = document.querySelector("#menu-screen");
        this.menu=document.querySelector("#menu");

        this.historyButton=document.querySelector("#history");
        this.playButton=document.querySelector("#play");
        this.aboutButton=document.querySelector("#about");

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
        this.game=new GameProcess(this.canvas);
        this.game.init();

        let id = setInterval(() => {
            if(percent === 103) {
                this.canvas.classList.add("hide-cursor");
                this.clearMenu();
                this.game.startIntro();
                this.setPauseListeners();
                clearInterval(id);
            }
            this.loading.innerText = `${percent}`+"%";
            percent += 5;
        }, 250);
        this.loading.innerText = `${percent}`+"%";
    }

    clearMenu() {
        this.menuScreen.removeChild(this.loading);
        this.menuScreen.classList.add("hide");

        this.menu.removeChild(this.playButton);
        this.menu.removeChild(this.historyButton);
        this.menu.removeChild(this.aboutButton);
    }

    setPauseListeners() {
        this.createPauseMenuElements();
        this.createPauseMenu();

        this.resumeButton.addEventListener('click', (event) => {
            this.game.pause(this.menuScreen);
        });

        this.restartButton.addEventListener('click', () => {
            this.canvas.classList.remove("hide");
            this.menuScreen.classList.add("hide");

            if (this.menu.lastChild===this.aboutButton) {
                this.menu.removeChild(this.aboutButton);
                this.menu.insertBefore(this.resumeButton, this.restartButton);
            }

            this.game.restart();
        });

        this.menuButton.addEventListener('click', () => {
            document.location.href="./index.html";
        });

        document.addEventListener('keydown', (event) => {
            if (event.keyCode===27) {
                this.game.pause(this.menuScreen);
            }

            if (event.keyCode===FINISH_OPTIONS.finishCode) {
                this.createFinishMenu();
                this.game.pause(this.menuScreen);
            }
        });

    }

    createPauseMenuElements() {
        this.menu.classList.remove("hide");

        this.restartButton=document.createElement('div');
        this.restartButton.classList.add("button");

        this.restartTitle=document.createElement('h3');
        this.restartTitle.innerText="RESTART";
        this.restartButton.appendChild(this.restartTitle);
        //--------------------------------------------------------------------
        this.resumeButton=document.createElement('div');
        this.resumeButton.classList.add("button");

        this.resumeTitle=document.createElement('h3');
        this.resumeTitle.innerText="RESUME";
        this.resumeButton.appendChild(this.resumeTitle);
        //--------------------------------------------------------------------
        this.menuButton=document.createElement('div');
        this.menuButton.classList.add("button");

        this.menuTitle=document.createElement('h3');
        this.menuTitle.innerText="MENU";
        this.menuButton.appendChild(this.menuTitle);
    }

    createPauseMenu() {
        this.menu.appendChild(this.resumeButton);
        this.menu.appendChild(this.restartButton);
        this.menu.appendChild(this.menuButton);
    }

    createFinishMenu() {
        this.menu.removeChild(this.resumeButton);
        this.menu.appendChild(this.aboutButton);
    }
}

new XWingTransporterGame();
