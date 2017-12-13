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
            this.menu.classList.add("hide");

            let percent = 3;
            const loading = document.createElement("div");
            loading.classList = "loading";
            this.menuScreen.appendChild(loading);

            const game=new GameProcess();
            game.init();

            let id = setInterval(() => {
                if(percent === 103) {
                    this.menuScreen.classList.add("hide");
                    document.body.classList.add("hide-cursor");
                    game.animateIntro();
                    clearInterval(id);
                }
                loading.innerText = `${percent}`+"%";
                percent += 5;
            }, 500);
            loading.innerText = `${percent}`+"%";
            game.addEnemies();
        });
    }
}

new XWingTransporterGame();
