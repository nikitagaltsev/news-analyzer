//  Класс списка карточек коммитов на странице «О проекте».
export default class CommitCardList {
  constructor(container) {
    this._container = container;
  }

  addCard(card) {
    this._container.append(card);
  }

}
