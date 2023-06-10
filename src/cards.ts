import defaults from "./default_state.json";

enum CardKind {
  Good = "good",
  Bad = "bad",
  Improvement = "improvement",
}

export type Card = {
  text: string;
  kind: CardKind;
};

export class Deck {
  private cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  remaining(): number {
    return this.cards.length;
  }

  pickRandom(): Card {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(randomIndex, 1)[0];
  }
}

export class DefaultStateStorage {
  list(): Card[] {
    return [
      ...defaults.good.map(makeGoodCard),
      ...defaults.bad.map(makeBadCard),
      ...defaults.improvement.map(makeImprovementCard),
    ];
  }
}

function makeGoodCard(text: string) {
  return { text, kind: CardKind.Good };
}

function makeBadCard(text: string) {
  return { text, kind: CardKind.Bad };
}

function makeImprovementCard(text: string) {
  return { text, kind: CardKind.Improvement };
}
