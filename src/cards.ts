import defaults from "./default_state.json";

export type Card = string;

export class Deck {
  private cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  numRemaining(): number {
    return this.cards.length;
  }

  pickRandom(): Card {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(randomIndex, 1)[0];
  }
}

export class DefaultStateStorage {
  list(): Card[] {
    return [...defaults];
  }
}
