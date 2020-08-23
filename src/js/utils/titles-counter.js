import DataStorage from '../modules/DataStorage';
const dataStorage = new DataStorage(localStorage);

export default function titlesCounter() {
  let counter = 0;
  dataStorage.getNews().forEach(item => {
    if (item.title.toLowerCase().match(dataStorage.getSearchWord().toLowerCase())) {
      counter += 1
    }
  })
  return counter;
}
