import React from 'react';
import styles from './styles.module.scss';
import { Tag } from '../../../Assets/Tag';

export const Header = () => (
  <div className={styles.container}>
    <div className={styles.buttons}>
      <div className={styles.button}>
        <Tag />
      </div>
      <div className={styles.button}>
        <Tag />
      </div>
    </div>
  </div>
);
