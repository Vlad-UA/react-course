import { POSTS_DATA, POSTS_DATA_LAST_REQUEST_TIME } from '../../constants/localStorage';

const url = 'https://api.backendless.com/520C1D14-9413-E1AA-FF78-6A4DB0E26E00/9C9A66AC-959A-D6F4-FFAB-BD991AA34A00';

export const api = {
  async getPosts() {
    try {
      const response = await fetch(`${url}/data/news`);
      const postsData = await response.json();
      const dateNowUnix = Math.floor(Date.now() / 1000);

      localStorage.setItem(POSTS_DATA, JSON.stringify(postsData));
      localStorage.setItem(POSTS_DATA_LAST_REQUEST_TIME, dateNowUnix.toString());

      return postsData;
    } catch (_) {
      return [];
    }
  },
};
