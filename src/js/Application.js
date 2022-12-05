import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
    static get events() {
        return {
            READY: "ready",
        };
    }

    constructor() {
        super();
        this.emojis = ["🐒", "🦍", "🦧"];
        this.banana = "🍌";
        this.emit(Application.events.READY);
    }
    setEmojis(emojis) {
        this.emojis = emojis;
    }

    addBananas() {   
        const paragraph = document.createElement("p"); 
        document.getElementById("emojis").appendChild(paragraph);
        this.mb = [this.emojis, this.banana].join("");
        document.getElementById("p").innerHTML = this.mb;
    }
}
