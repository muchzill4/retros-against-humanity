import defaults from "./default_state.json";

export enum CardKind {
  Good = "good",
  Bad = "bad",
  Improvement = "improvement",
}

type Card = {
  text: string;
  kind: CardKind;
};

function makeGoodCard(text: string) {
  return { text, kind: CardKind.Good };
}

function makeBadCard(text: string) {
  return { text, kind: CardKind.Bad };
}

function makeImprovementCard(text: string) {
  return { text, kind: CardKind.Improvement };
}

export class DefaultStateStorage {
  list(kind: CardKind): Card[] {
    switch (kind) {
      case CardKind.Good:
        return defaults.good.map(makeGoodCard);
      case CardKind.Bad:
        return defaults.bad.map(makeBadCard);
      case CardKind.Improvement:
        return defaults.improvement.map(makeImprovementCard);
    }
  }
}
