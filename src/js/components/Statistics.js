// . Класс, отвечающий за логику работы графиков со статистикой на странице аналитики. Конструктор класса получает объект, содержащий текущее состояние локального браузерного хранилища.
// диаграмму частоты упоминаний ключевого слова по дням недели. Здесь нужно посчитать упоминания ключевых слов и в заголовках, и в текстах статей. Поэтому вам нужно задействовать свойства title и description.


export default class Statistics {
  constructor(localStore, graph, daysGraph, daysContainer, graphContainer) {
    this._localStore = localStore;
    this._word = this._localStore.searchWord.toLowerCase();
    this._graph = graph;
    this._daysGraph = daysGraph;
    this._daysContainer = daysContainer;
    this._graphContainer = graphContainer;
    this._news = JSON.parse(localStore.news);
    this._repliesArr = [];
    this._maxNumber = 0;
  }

  //преобразование даты
  _performDays() {
    const pattern = /\d{4}-\d{2}-\d{2}/;
    return this._news.map(item => {
      return item.publishedAt = item.publishedAt.match(pattern).toString();
    });
  }

  //считаем количество упоминаний за каждый день
  calculate() {
    this._performDays();
    this._news.forEach(item => {
      const resultObj = {
        date: '',
        counter: 0
      }
      resultObj.date = item.publishedAt;

      if (item.title.toLowerCase().split(' ').includes(this._word)) {
        resultObj.counter++;
      }

      item.description.split(' ').forEach(item => {
        if (item.toLowerCase().includes(this._word)) {resultObj.counter++};
      })

      this._repliesArr.push(resultObj);
    })
    this._getSortDate();
  }

  //сортируем по дате
  _getSortDate() {
    this._repliesArr.sort((a, b) => {
      let dateA = new Date(a.date), dateB = new Date(b.date);
      return dateA - dateB;
    })
    this._getUniqueDate(this._repliesArr);
  }

  //получаем количество упоминаний за каждый день
  _getUniqueDate(dates) {
    let lookup = {};
    let newDates = [];
    dates.forEach(item => lookup[item.date] = (lookup[item.date] || 0) + item.counter);
    Object.keys(lookup).forEach(item => newDates.push({date: item, counter: lookup[item]}));
    this._getFinalData(newDates);
  }

  //получаем итоговые данные для вывода в таблицу
  _getFinalData(dates) {
    const shortDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    dates.forEach(item => {
      item.date = item.date.split('-')[2];
      if (item.counter > this._maxNumber) {
        this._maxNumber = item.counter;
      }
    })
    const currentDay = new Date().getDay()
    const tempDaysArr = shortDays.splice(shortDays.indexOf(currentDay)-1 )
    const finalDays = tempDaysArr.concat(shortDays);

    let i = 0
    dates.splice(0, 7).forEach(item => {
      this._view = this._daysGraph.cloneNode(true).children[0];
      this._view.textContent = `${item.date}, ${finalDays[i]}`;
      this._progress = this._graph.cloneNode(true).children[0];
      this._progress.textContent = item.counter;
      const percentage = Math.floor((item.counter / this._maxNumber) * 100);
      this._progress.style.width = `${percentage - 1.5}%`;

      this._render(this._view, this._progress);
      i++
    });
    i = 0
  }

  _render(days, progress) {
    this._daysContainer.append(days);
    this._graphContainer.append(progress);
  }

}
