import React from 'react';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import styles from './styles.module.scss';

export const Article = ({
  title, description, published, likes, comments, image, tags,
}) => (
  <div className={styles.container}>
    <Header tags={tags} image={image} />
    <div className={styles.body}><Body title={title} description={description} /></div>
    <div className={styles.footer}>
      <Footer comments={comments} likes={likes} published={published} />
    </div>
  </div>
);
