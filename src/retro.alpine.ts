import { DefaultStateStorage, Deck } from "./cards";

export default () => {
  const storage = new DefaultStateStorage();
  const deck = new Deck(storage.list());

  return {
    current: null,
    deck: deck,
    expanded: true,

    pickRandom() {
      this.expanded = false;
      const that = this;
      setTimeout(function() {
        that.current = that.deck.pickRandom();
        that.expanded = true;
      }, 400);
    },

    remaining(): number {
      return this.deck.remaining();
    },
  };
};
