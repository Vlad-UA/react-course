import { useState, useEffect } from 'react';
import { api } from './api';

export const useNews = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(
    () => {
      api.getPosts()
        .then(
          (postsFromServer) => {
            setPosts(postsFromServer);
            setLoadingState(false);
          },
        )
        .catch(
          () => setLoadingState(false),
        );
    },
    [],
  );

  return { posts, isLoading };
};
