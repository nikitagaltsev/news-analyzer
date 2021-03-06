// Класс DataStorage предоставляет интерфейс для работы с локальным хранилищем браузера.

export default class DataStorage {
  constructor(localStorage) {
    this._local = localStorage;
  }

  setSearchWord(word) {
    this._local.setItem('searchWord', word);
  }

  setTotalResults(data) {
    this._local.setItem('totalResults', data);
  }

  setNews(data) {
    this._local.setItem('news', data);
  }

  setCommits(data) {
    this._local.setItem('commits', data);
  }

  getSearchWord() {
    return this._local.getItem('searchWord');
  }

  getTotalResults() {
    return this._local.getItem('totalResults');
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
