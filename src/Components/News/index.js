import React from 'react';
import { Article } from '../Article';
import styles from './styles.module.scss';

export const News = ({ source }) => (
  <ul className={styles.articles}>
    {
      source.map(({
        title, description, published, likes, comments, image, tags,
      }) => (
        <li key={title}>
          <Article
            title={title}
            description={description}
            published={published}
            likes={likes}
            comments={comments}
            image={image}
            tags={tags}
          />
        </li>
      ))
    }
  </ul>
);
