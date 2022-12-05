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
        document.createElement("p").innerHTML = this.emojis.map(this.mb);
        this.mb = [this.emojis, this.banana].join("");
        document.getElementById("emojis").appendChild();
        }
    }
