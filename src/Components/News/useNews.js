import { useState, useEffect } from 'react';
import { api } from './api';

export const useNews = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () => { api.getPosts().then((postsFromServer) => setPosts(postsFromServer)); },
    [],
  );

  return { posts };
};
