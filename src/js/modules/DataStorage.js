// Класс DataStorage предоставляет интерфейс для работы с локальным хранилищем браузера.

export default class DataStorage {
  constructor(localStorage) {
    this._local = localStorage;
  }

  setData(data) {
    this._local.setItem('news', data);
  }

  getNews() {
    return JSON.parse(this._local.getItem('news'));
  }

  resetStore() {
    this._local.clear();
  }
}
