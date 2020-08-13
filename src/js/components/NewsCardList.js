//  Класс списка карточек новостей.

export default class NewsCardList {
  constructor(container) {
    this._container = container;
  }

  addCard(card) {
    this._container.append(card);
  }

  removeCards() {
    const cards = this._container.querySelectorAll('.news__card');
    if (this._container.querySelectorAll('.news__card').length > 0) {
      cards.forEach(item => {
        this._container.removeChild(item);
      })
    }
  }

}
