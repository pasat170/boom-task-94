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
        this.mb = Array.prototype.map.call(this.emojis, function (monkey) {
            return monkey + "🍌";
        });
        document.getElementById("p").innerHTML = this.mb;
    }
}
