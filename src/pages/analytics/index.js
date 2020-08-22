import './style.css'
import titlesCounter from '../../js/utils/titles-counter';
import Statistics from '../../js/components/Statistics';
import DataStorage from '../../js/modules/DataStorage'


(function () {
  const dataStorage = new DataStorage(localStorage);
  const graph = document.querySelector('#progress__template').content;
  const graphContainer = document.querySelector('.table__progress-bar');
  const daysGraph = document.querySelector('#table__template').content;
  const daysContainer = document.querySelector('.table__days');
  const monthes = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
  const statistics = new Statistics(localStorage, graph, daysGraph, daysContainer, graphContainer).calculate();


  document.querySelector('.question__title').textContent = `Вы спросили: «${dataStorage.getSearchWord()}»`;
  document.querySelector('.question__span_weeks').textContent = dataStorage.getTotalResults();
  document.querySelector('.question__span_titles').textContent = titlesCounter();
  document.querySelector('.table__text_date').textContent = `Дата (${monthes[new Date().getMonth()]})`;
})();

