import React from 'react';
import styles from './styles.module.scss';
import { OpenButton } from '../../../Assets/OpenButton';

export const Question = ({
  question, answer, isOpen, onOpenQuestion, id,
}) => {
  const onClickOpenButton = () => {
    onOpenQuestion(id);
  };

  return (
    <>
      <div className={styles.question}>
        <span>{question}</span>
        <span className={styles.openButton}>
          <OpenButton isOpen={isOpen} onClick={onClickOpenButton} />
        </span>
      </div>
      { isOpen && <div className={styles.answer}>{answer}</div> }
    </>
  );
};
