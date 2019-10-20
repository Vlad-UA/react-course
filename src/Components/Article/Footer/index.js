import React from 'react';
import styles from './styles.module.scss';
import { CommentsCounter } from '../../../Assets/CommentsCounter';
import { LikesCounter } from '../../../Assets/LikesCounter';
import { Share } from '../../../Assets/Share';

export const Footer = () => (
  <div className={styles.container}>
    <span>15.07.2017</span>
    <span><CommentsCounter /></span>
    <span><LikesCounter /></span>
    <span><Share /></span>
  </div>
);
