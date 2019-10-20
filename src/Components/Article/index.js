import React from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import styles from './styles.module.scss';

export const Article = () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.body}><Body /></div>
    <div className={styles.footer}><Footer /></div>
  </div>
);
