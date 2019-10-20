import React from 'react';
import comment from './likes.png';

export const LikesCounter = ({ counts }) => (
  <>
    <img src={comment} alt="likes" />
    {counts}
  </>
);
