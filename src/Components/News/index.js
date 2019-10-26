import React from 'react';
import { Article } from '../Article';
import styles from './styles.module.scss';
import { useNews } from './useNews';

export const News = () => {
  const { posts } = useNews();

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
    <ul className={styles.articles}>
      {articles}
    </ul>
  );
};
