const url = 'https://api.backendless.com/520C1D14-9413-E1AA-FF78-6A4DB0E26E00/9C9A66AC-959A-D6F4-FFAB-BD991AA34A00';

export const api = {
  async getPosts() {
    const localStorageIds = {
      postsDataLastRequestTime: 'postsDataLastRequestTime',
      postsData: 'postsData',
    };

    const dateNowUnix = Math.floor(Date.now() / 1000);

    const postsDataLastRequestTime = Number(
      localStorage.getItem(localStorageIds.postsDataLastRequestTime),
    );

    const cacheRequestTimeMinutes = 10;

    if ((dateNowUnix - postsDataLastRequestTime) / 60 > cacheRequestTimeMinutes) {
      const response = await fetch(`${url}/data/news`);
      const postsData = await response.json();

      localStorage.setItem(localStorageIds.postsData, JSON.stringify(postsData));
      localStorage.setItem(localStorageIds.postsDataLastRequestTime, dateNowUnix.toString());

      return postsData;
    }

    return JSON.parse(localStorage.getItem(localStorageIds.postsData));
  },
};
