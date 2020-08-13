// SearchInput. Конструктор класса принимает колбэк-функцию, исполняемую при сабмите формы поиска. В колбэк-функции описывается взаимодействие с API, списком карточек и локальным браузерным хранилищем. Полученные от NewsAPI данные должны приводить к обновлению хранилища, а список карточек отображать полученные данные на странице. Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы, управляющие работой кнопки сабмита.

export default class SearchInput {
  constructor(doSearch, form, input) {
    this.doSearchCallback = doSearch;
    this.doSearchCallback = this.doSearchCallback.bind(this)
    this.form = form;
    this.input = input;
    this.button = form.querySelector('.search-hub__button');
  }

  search() {
    this.doSearchCallback();
  }

  validate() {

  }

  buttonState(status) {
    if (status) {
      this.button.classList.remove('popup__button_active');
      this.button.disabled = true;
      this.button.style.cursor = 'not-allowed';
    } else {
      this.button.classList.add('popup__button_active');
      this.button.disabled = false;
      this.button.style.cursor = 'pointer';
    };
  }
}
