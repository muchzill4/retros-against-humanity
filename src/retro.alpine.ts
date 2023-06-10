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
      const that = this;
      setTimeout(function() {
        that.currentCard = that.deck.pickRandom();
        that.expanded = true;
      }, 400);
    },

    numRemainingCards(): number {
      return this.deck.numRemaining();
    },

    hasRemainingCards(): boolean {
      return this.numRemainingCards() > 0;
    },
  };
};
