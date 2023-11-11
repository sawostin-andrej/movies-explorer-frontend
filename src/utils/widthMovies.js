import * as screen from "../utils/constants";

export default function widthMovies() {
  const quantityCards = {
    cards: screen.CARDS_PER_DESKTOP,
    add: screen.ROWS_PER_DESKTOP,
  };

  if (window.innerWidth < screen.DESKTOP_SCREEN_WIDTH) {
    quantityCards.cards = screen.CARDS_PER_DESKTOP;
    quantityCards.add = screen.ROWS_PER_DESKTOP;
  }

  if (window.innerWidth < screen.TABLET_SCREEN_WIDTH) {
    quantityCards.cards = screen.CARDS_PER_TABLET;
    quantityCards.add = screen.ROWS_PER_MOBILE;
  }

  if (window.innerWidth < screen.MOBILE_SCREEN_WIDTH) {
    quantityCards.cards = screen.CARDS_PER_MOBILE;
    quantityCards.add = screen.ROWS_PER_MOBILE;
  }
  return quantityCards;
}
