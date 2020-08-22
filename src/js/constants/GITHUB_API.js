import GithubApi from '../modules/GithubApi';

const GITHUB_API = new GithubApi({
  baseUrl: 'https://api.github.com',
  user: 'nikitagaltsev',
  repoName: 'news-analyzer',
  perPage: '20'
})


export default GITHUB_API;
