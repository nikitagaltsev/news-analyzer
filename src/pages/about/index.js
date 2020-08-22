import './style.css'
import 'swiper/swiper-bundle.css';
import { Swiper, Navigation, Pagination } from 'swiper';
import gitHubApi from '../../js/constants/GITHUB_API';
import CommitCard from '../../js/components/CommitCard';
import CommitCardList from '../../js/components/CommitCardList';
import DataStorage from '../../js/modules/DataStorage'



(function () {
  Swiper.use([Navigation, Pagination]);

  if (document.location.pathname === '/about.html') {
    document.querySelector('.pages__link_main').classList.remove('pages__link_active');
    document.querySelector('.pages__link_about').classList.add('pages__link_active');
  }

  const commitTemplate = document.querySelector('#commit-template').content;
  const commitCardList = new CommitCardList(document.querySelector('.swiper__wrapper'));
  const dataStorage = new DataStorage(localStorage);

  gitHubApi.getCommits()
  .then(res => {
    const commits = JSON.stringify(res);
    dataStorage.setCommits(commits);
  })
  .then(res => {
    dataStorage.getCommits().forEach(item => {
      const commitCard = new CommitCard(commitTemplate, item).create();
      commitCardList.addCard(commitCard);
    });
  })
  .then(res => {
    const swiper = new Swiper('.swiper', {
      slideClass: 'swiper__slide',
      wrapperClass: 'swiper__wrapper',

      breakpoints: {
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 16,
        },

        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 8,
        },

        100: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 8
        }
      },

      pagination: {
        el: '.swiper__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'swiper__bullet',
        bulletActiveClass: 'swiper__bullet_active'
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

    });
  })
  .catch(err => {
    console.log(err);
  })

})();












