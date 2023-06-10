import { DefaultStateStorage, Deck } from "./cards";

export default () => {
  const storage = new DefaultStateStorage();
  const deck = new Deck(storage.list());

  return {
    currentCard: null,
    deck: deck,
    expanded: true,

    pickRandomCard() {
      this.expanded = false;
      setTimeout(() => {
        this.currentCard = this.deck.pickRandom();
        this.expanded = true;
      }, 400);
    },

    reset() {
      this.expanded = false;
      setTimeout(() => {
        this.deck = new Deck(storage.list());
        this.currentCard = null;
        this.expanded = true;
      }, 400);
    },

    numRemainingCards(): number {
      return this.deck.numRemaining();
    },

    isEndOfDeck(): boolean {
      return this.numRemainingCards() == 0 && !this.currentCard;
    },
  };
};
