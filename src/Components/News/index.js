import React from 'react';
import { Article } from '../Article';
import styles from './styles.module.scss';

export const News = () => (
  <ul className={styles.articles}>
    <li>
      <Article />
    </li>
    <li>
      <Article />
    </li>
    <li>
      <Article />
    </li>
  </ul>
);
