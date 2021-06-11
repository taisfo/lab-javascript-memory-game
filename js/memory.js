class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.gameOver = false;
  }

  shuffleCards() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  checkIfPair(card1, card2) {
    card1 = this.pickedCards[0];
    card2 = this.pickedCards[1];
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === 12) {
      this.gameOver = true;
    }
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
