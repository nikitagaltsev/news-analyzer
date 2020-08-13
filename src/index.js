// 0934753f1d2b453d88b568743d71b5fe

import './style.css';

import DataStorage from './js/modules/DataStorage';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import SearchInput from './js/components/SearchInput';
import newsApi from './js/constants/news-api';

(function () {


  const cardTemplate = document.querySelector('#card-template').content;
  const newsContainer = document.querySelector('.news');
  const form = document.querySelector('.search-hub');
  const input = form.querySelector('.search-hub__input');
  const moreButton = document.querySelector('.search-result__show-more');

  const dataStorage = new DataStorage(localStorage);
  const newsCardList = new NewsCardList(newsContainer);
  const searchInput = new SearchInput(doSearch, form, input);

  const pages = {
    from: 3,
    to: 6
  }

  //Функция создания трех карточек
  const createCard = function (from, to) {
    dataStorage.getNews().slice(from, to).forEach(item => {
      const newCard = new NewsCard(cardTemplate, item).create();
      newsCardList.addCard(newCard);
    })
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



  moreButton.addEventListener('click', evt => {
    createCard(pages.from, pages.to);
    pages.from += 3;
    pages.to += 3;
    if (pages.to >= dataStorage.getNews().length - 1) {
      moreButton.style.display = "none";
    }
  })


   function doSearch() {
    newsApi.getNews(input.value)
    .then(res => {
      if (res.status === 'ok') {
        const articles = JSON.stringify(res.articles);
        dataStorage.setData(articles);
      }
    })
    .then(res => {
      createCard(0, 3);
    })
    .catch(err => {
      console.log(err)
    })
  }






})();


