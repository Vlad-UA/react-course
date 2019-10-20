import React from 'react';
import styles from './styles.module.scss';

export const Tag = ({ source }) => <button className={styles.button} type="button">{source}</button>;
