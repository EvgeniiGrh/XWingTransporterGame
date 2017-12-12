import GameProcess from "./GameProcess";

class XWingTransporterGame {
    constructor() {
        this.menu=document.querySelector("#menu");
        this.menuScreen = document.querySelector("#menu-screen");
        this.playButton=document.querySelector("#play");
        this.setPlayListener();
    }

    setPlayListener() {
        this.playButton.addEventListener("click", function(){
            this.menu.classList = "hide";

            let percent = 0;
            let loading = document.createElement("div");
            loading.classList = "loading";
            this.menuScreen.appendChild(loading);

            (new GameProcess()).init();

            let id = setInterval(() => {
                if(percent === 105) {
                    this.menuScreen.classList = "hide";
                    document.body.classList.add("hide-cursor");
                    clearInterval(id);
                }
                loading.innerText = `${percent}`+"%";
                percent += 5;
            }, 500);

        }.bind(this));
    }
}

new XWingTransporterGame();
