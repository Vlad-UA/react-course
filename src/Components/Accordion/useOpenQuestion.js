import { useState } from 'react';

export const useOpenQuestion = () => {
  const [openedQuestionId, setQuestionId] = useState(null);

  const onOpenQuestion = (questionId) => {
    setQuestionId(questionId);
  };

  return {
    openedQuestionId,
    onOpenQuestion,
  };
};
