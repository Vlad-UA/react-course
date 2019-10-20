import React from 'react';
import styles from './styles.module.scss';
import { Tag } from '../../../Assets/Tag';

export const Header = ({ tags, image }) => (
  <div className={styles.container} style={{ backgroundImage: `url(${image})` }}>
    <div className={styles.buttons}>
      {
        tags.map((tag) => (
          <div className={styles.button} key={tag}>
            <Tag source={tag} />
          </div>
        ))
      }
    </div>
  </div>
);
