import React from 'react';
import comment from './comment.png';

export const CommentsCounter = ({ counts }) => (
  <>
    <img src={comment} alt="comment" />
    {counts}
  </>
);
