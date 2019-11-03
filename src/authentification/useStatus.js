export const useStatus = () => {
  const isAuthenticated = () => localStorage.getItem('isLogin') === 'true';

  return { isAuthenticated };
};
