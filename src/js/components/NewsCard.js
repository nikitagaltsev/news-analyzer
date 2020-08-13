// Класс карточки новости

export default class NewsCard {
  constructor(template, cardData) {
    this._template = template;
    this._author = cardData.source.name;
    this._url = cardData.url;
    this._title = cardData.title;
    this._image = cardData.urlToImage;
    this._description = cardData.description;
    this._date = cardData.publishedAt;
  }

  create() {
    this._card = this._template.cloneNode(true).children[0];
    this._card.setAttribute('href', this._url);
    this._card.querySelector('.news__title').textContent = this._title;
    this._card.querySelector('.news__text').textContent = this._description;
    this._card.querySelector('.news__image').setAttribute('src', this._image)
    this._card.querySelector('.news__source').textContent = this._author;

    return this._card;
  }

}
