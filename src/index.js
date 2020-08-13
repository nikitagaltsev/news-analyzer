// 0934753f1d2b453d88b568743d71b5fe

import './style.css';

import DataStorage from './js/modules/DataStorage';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import SearchInput from './js/components/SearchInput';
import SearchState from './js/components/SearchState';
import newsApi from './js/constants/news-api';
import createCard from './js/utils/create-card';


(function () {

  const cardTemplate = document.querySelector('#card-template').content;
  const newsContainer = document.querySelector('.news');
  const form = document.querySelector('.search-hub');
  const input = form.querySelector('.search-hub__input');
  const moreButton = document.querySelector('.search-result__show-more');

  const dataStorage = new DataStorage(localStorage);
  const newsCardList = new NewsCardList(newsContainer);
  const searchInput = new SearchInput(doSearch, form, input);

  const inProgress = new SearchState(document.querySelector('.in-progress'));
  const noResult = new SearchState(document.querySelector('.no-result'));
  const resultDone = new SearchState(document.querySelector('.search-result'));

  const pages = {
    from: 3,
    to: 6
  }

  //работаем с формой
  form.addEventListener('submit', evt => {
    evt.preventDefault()
    dataStorage.resetStore();
    newsCardList.removeCards();
    searchInput.search();
    pages.from = 3;
    pages.to = 6;
  })

  //показать больше
  moreButton.addEventListener('click', evt => {
    createCard(pages.from, pages.to, dataStorage, NewsCard, cardTemplate, newsCardList);
    pages.from += 3;
    pages.to += 3;
    if (pages.to >= dataStorage.getNews().length - 1) {
      moreButton.style.display = 'none';
    }
  })


  //запуск поиска
   function doSearch() {
    inProgress.setActive();
    newsApi.getNews(input.value)
    .then(res => {
      if (res.status === 'ok') {
        const articles = JSON.stringify(res.articles);
        dataStorage.setData(articles);
        console.log(res.articles.length)
      }

      if (res.articles.length == 0) {
        return Promise.reject(() => {
          inProgress.setInactive();
          resultDone.setInactive();
          noResult.setActive();
        })
      }
    })
    .then(res => {
      createCard(0, 3, dataStorage, NewsCard, cardTemplate, newsCardList);
    })
    .then(res => {
      inProgress.setInactive();
      resultDone.setActive();
    })
    .catch(err => {
      inProgress.setInactive();
      noResult.setActive();
      console.log(err)
    })
  }






})();


