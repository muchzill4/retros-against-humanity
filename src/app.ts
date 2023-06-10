import { DefaultStateStorage, Deck, Card } from "./cards";
import Alpine from "alpinejs";

window.Alpine = Alpine;

class CardsStore {
  deck: Deck;
  protected previousPicks: Card[] = [];
  private current: Card;
  expanded: boolean;

  constructor(deck: Deck) {
    this.deck = deck;
  }

  random() {
    this.expanded = false;
    const that = this;
    setTimeout(function() {
      that.previousPicks.push(that.current);
      that.current = that.deck.random();
      that.expanded = true;
    }, 400);
  }

  remaining(): number {
    return this.deck.remaining();
  }
}

document.addEventListener("alpine:init", () => {
  const storage = new DefaultStateStorage();
  const deck = new Deck(storage.list());
  Alpine.store("cards", new CardsStore(deck));
});

Alpine.start();
