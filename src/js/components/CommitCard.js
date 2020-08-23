// Аналогичен компоненту NewsCard только для карточек коммитов на странице «О проекте».

import convertData from '../utils/convert-data';

export default class CommitCard {
  constructor(template, cardData) {
    this._template = template;
    this._commitLink = cardData.html_url;
    this._date = cardData.commit.committer.date;
    this._name = cardData.commit.committer.name;
    this._email = cardData.commit.committer.email;
    this._description = cardData.commit.message;
    this._avatarURL = cardData.author.avatar_url;
  }

  create() {
    this._card = this._template.cloneNode(true).children[0];
    this._card.querySelector('.swiper__link').setAttribute('href', this._commitLink);
    this._card.querySelector('.swiper__date').textContent = convertData(this._date);
    this._card.querySelector('.swiper__title').textContent = this._name;
    this._card.querySelector('.swiper__email').textContent = this._email;
    this._card.querySelector('.swiper__text').textContent = this._description;
    this._card.querySelector('.swiper__avatar').setAttribute('src', this._avatarURL);

    return this._card;
  }
}
