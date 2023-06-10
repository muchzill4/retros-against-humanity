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

    remainingCards(): number {
      return this.deck.remaining();
    },

    hasRemainingCards(): boolean {
      return this.remainingCards() > 0;
    },
  };
};
