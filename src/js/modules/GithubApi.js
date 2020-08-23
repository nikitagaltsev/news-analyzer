// Класс, аналогичный NewsApi, но отвечает за взаимодействие с Github. Вместо метода getNews у этого класса метод getCommits.

export default class GithubApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._user = options.user;
    this._repoName = options.repoName;
    this._perPage = options.perPage;
  }

  getCommits() {
    return fetch(`${this._baseUrl}/repos/${this._user}/${this._repoName}/commits?per_page=${this._perPage}`,
    {
      method: 'GET',
    })
    .then(res => res.json())
    .catch(err => {});
  }
}
