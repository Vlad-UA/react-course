import React from 'react';
import { Question } from './Question';
import styles from './styles.module.scss';
import { useOpenQuestion } from './useOpenQuestion';

export const Accordion = ({ source }) => {
  const { onOpenQuestion, openedQuestionId } = useOpenQuestion();

  return (
    <ul className={styles.container}>
      {
      source.map(({ question, answer }, index) => (
        <li key={question}>
          <Question
            question={question}
            answer={answer}
            id={index}
            isOpen={openedQuestionId === index}
            onOpenQuestion={onOpenQuestion}
          />
        </li>
      ))
    }
    </ul>
  );
};
