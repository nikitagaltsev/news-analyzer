import GithubApi from '../modules/GithubApi';

const gitHubApi = new GithubApi({
  baseUrl: 'https://api.github.com',
  user: 'nikitagaltsev',
  repoName: 'news-analyzer',
  perPage: '20'
})


export default gitHubApi;
