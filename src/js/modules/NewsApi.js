// Отвечает за взаимодействие с NewsAPI. У класса есть конструктор, принимающий опции и единственный обязательный метод getNews. getNews возвращает список новостей на основе запроса.

// http://newsapi.org/v2/everything?q=apple&from=2020-08-12&to=2020-08-12&sortBy=popularity&apiKey=0934753f1d2b453d88b568743d71b5fe

export default class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getNews(searchWord, currentDate, oneWeekAgoDate) {
    return fetch(`${this.baseUrl}/v2/everything?q=${searchWord}&from=${oneWeekAgoDate}&to=${currentDate}&sortBy=popularity&apiKey=${this.headers.authorization}`, {
      method: 'GET',
      headers: {
        authorization: this.headers.authorization
      }
    }).then(res => res.json());
  }
}
