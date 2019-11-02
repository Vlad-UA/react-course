import React from 'react';
import { Article } from '../Article';
import styles from './styles.module.scss';
import { useNews } from './useNews';
import { useLogout } from '../../authentification/useLogout';
import { Loader } from '../../Assets/Loader';

export const News = () => {
  const { posts, isLoading } = useNews();
  const { logout } = useLogout();

  if (isLoading) {
    return <Loader />;
  }

  const articles = posts.map(({
    title, description, created, likes, comments, poster, tags, objectId,
  }) => (
    <li key={objectId}>
      <Article
        title={title}
        description={description}
        published={Number(created)}
        likes={likes}
        comments={comments}
        image={poster}
        tags={tags.split(',')}
      />
    </li>
  ));

  return (
    <>
      <button onClick={logout} type="button">Logout</button>
      <ul className={styles.articles}>
        {articles}
      </ul>
    </>
  );
};
