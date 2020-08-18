// Класс DataStorage предоставляет интерфейс для работы с локальным хранилищем браузера.

export default class DataStorage {
  constructor(localStorage) {
    this._local = localStorage;
  }

  setNews(data) {
    this._local.setItem('news', data);
  }

  setCommits(data) {
    this._local.setItem('commits', data);
  }

  getNews() {
    return JSON.parse(this._local.getItem('news'));
  }

  getCommits() {
    return JSON.parse(this._local.getItem('commits'));
  }

  resetStore() {
    this._local.clear();
  }
}
