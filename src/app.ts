import { DefaultStateStorage, Deck, Card } from "./cards";
import Alpine from "alpinejs";

window.Alpine = Alpine;

class State {
  deck: Deck;
  protected previousPicks: Card[] = [];
  private current: Card;

  constructor(deck: Deck) {
    this.deck = deck;
    this.current = deck.random();
  }

  random() {
    this.previousPicks.push(this.current);
    this.current = this.deck.random();
  }

  remaining(): number {
    return this.deck.remaining();
  }
}

document.addEventListener("alpine:init", () => {
  const storage = new DefaultStateStorage();
  const deck = new Deck(storage.list());
  const cards = new State(deck);

  Alpine.store("cards", cards);
});

Alpine.start();
