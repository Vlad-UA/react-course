import { useHistory } from 'react-router-dom';
import { book } from '../navigation/book';

export const useLogout = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.setItem('isLogin', false.toString());
    history.push(book.login);
  };

  return { logout };
};
