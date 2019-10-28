export const useLogin = () => {
  const login = () => localStorage.setItem('isLogin', true.toString());

  return { login };
};
