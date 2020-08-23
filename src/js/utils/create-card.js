export default function createCard (from, to, dataStorage, NewsCard, cardTemplate, newsCardList) {
  dataStorage.getNews().slice(from, to).forEach(item => {
    const newCard = new NewsCard(cardTemplate, item).create();
    newsCardList.addCard(newCard);
  })
}
