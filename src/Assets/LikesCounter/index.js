import React from 'react';
import comment from './likes.png';
import { useCounter } from './useCounter';

export const LikesCounter = ({ counts: countsInitial }) => {
  const { counts, changeCount } = useCounter(countsInitial);

  return (
    <>
      <button onClick={changeCount} type="button">
        <img src={comment} alt="likes" />
      </button>
      {counts}
    </>
  );
};
