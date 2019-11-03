import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { api } from './api';
import { book } from '../../navigation/book';
import { POSTS_DATA_LAST_REQUEST_TIME, POSTS_DATA } from '../../constants/localStorage';

export const useNews = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const onPostsLoaded = (postsFromServer) => {
    const isPostExists = ({ objectId }) => objectId === id;

    if (!postsFromServer.some(isPostExists)) {
      history.push(book.unknown);
    }

    setPosts(postsFromServer.filter(isPostExists));
    setLoadingState(false);
  };

  const isPostDataOutdated = () => {
    const dateNowUnix = Math.floor(Date.now() / 1000);
    const postsDataLastRequestTime = Number(
      localStorage.getItem(POSTS_DATA_LAST_REQUEST_TIME),
    );
    const cacheNewsTimeMinutes = 10;

    return (dateNowUnix - postsDataLastRequestTime) / 60 > cacheNewsTimeMinutes;
  };


  useEffect(
    () => {
      setLoadingState(true);

      if (isPostDataOutdated()) {
        api.getPosts().then(onPostsLoaded);
      } else {
        onPostsLoaded(JSON.parse(localStorage.getItem(POSTS_DATA)));
      }
    },
    [],
  );

  return { posts, isLoading };
};
