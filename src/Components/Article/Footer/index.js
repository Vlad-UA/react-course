import React from 'react';
import styles from './styles.module.scss';
import { CommentsCounter } from '../../../Assets/CommentsCounter';
import { LikesCounter } from '../../../Assets/LikesCounter';
import { Share } from '../../../Assets/Share';

export const Footer = ({ likes, comments, published }) => {
  const date = new Date(published);

  return (
    <div className={styles.container}>
      <span>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</span>
      <span><CommentsCounter counts={comments} /></span>
      <span><LikesCounter counts={likes} /></span>
      <span><Share /></span>
    </div>
  );
};
