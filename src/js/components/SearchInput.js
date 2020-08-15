// SearchInput. Конструктор класса принимает колбэк-функцию, исполняемую при сабмите формы поиска. В колбэк-функции описывается взаимодействие с API, списком карточек и локальным браузерным хранилищем. Полученные от NewsAPI данные должны приводить к обновлению хранилища, а список карточек отображать полученные данные на странице. Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы, управляющие работой кнопки сабмита.

export default class SearchInput {

  static _errorMessages = {
    empty: 'Это обязательное поле',
    length: 'Должно быть от 2 до 15 символов',
    notText: 'Введите текст'
  };

  constructor(doSearch, form, input) {
    this.doSearchCallback = doSearch;
    this.doSearchCallback = this.doSearchCallback.bind(this)
    this._form = form;
    this._input = input;
    this._button = form.querySelector('.search-hub__button');
    this._errorElem = form.querySelector('.error-message');
  }

  search() {
    this.doSearchCallback();
  }

  checkFormValidity() {
    if (this._form.checkValidity()) {
      this.buttonState(false);
    } else {
      this.buttonState(true);
    }
  }

  checkInputValidity = () => {
    if (this._input.value.lenght === 0) {
      this._input.setCustomValidity(SearchInput._errorMessages.empty);
      this.checkFormValidity();
    } else if (this._input.validity.tooShort || this._input.validity.tooLong) {
      this._input.setCustomValidity(SearchInput._errorMessages.length);
      this.checkFormValidity;
    } else if ((this._input.type == 'url') && this._input.validity.typeMismatch) {
      this._input.setCustomValidity(SearchInput._errorMessages.notText);
      this.checkFormValidity;
    } else {
      this._input.setCustomValidity('');
      this.checkFormValidity();
    }
    this._errorElem.textContent = this._input.validationMessage;
  }

  buttonState(status) {
    if (!status) {
      this._button.classList.remove('search-hub__button_inActive');
      this._button.disabled = false;
    } else {
      this._button.classList.add('search-hub__button_inActive');
      this._button.disabled = true;
    };
  }
}
