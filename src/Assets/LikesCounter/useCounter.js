import { useState } from 'react';

export const useCounter = (countsInitial) => {
  const [counts, setCount] = useState(countsInitial);

  const increaseCount = () => {
    setCount((prevCounter) => prevCounter + 1);
  };

  return {
    counts,
    increaseCount,
  };
};
