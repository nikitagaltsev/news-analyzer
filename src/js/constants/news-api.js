import NewsApi from '../modules/NewsApi';

const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org/',
  headers: {
    authorization: '0934753f1d2b453d88b568743d71b5fe',
    'Content-Type': 'application/json'
  }
})

export default newsApi;

