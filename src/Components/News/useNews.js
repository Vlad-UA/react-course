import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { api } from './api';
import { book } from '../../navigation/book';

export const useNews = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const isPostExists = ({ objectId }) => objectId === id;

  const onPostsLoaded = (postsFromServer) => {
    if (!postsFromServer.some(isPostExists)) {
      history.push(book.unknown);
    }

    setPosts(postsFromServer.filter(isPostExists));
    setLoadingState(false);
  };

  useEffect(
    () => {
      setLoadingState(true);
      api.getPosts()
        .then(onPostsLoaded)
        .catch(() => setLoadingState(false));
    },
    [],
  );

  return { posts, isLoading };
};
