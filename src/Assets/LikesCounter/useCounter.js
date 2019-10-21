import { useState } from 'react';

export const useCounter = (countsInitial) => {
  const [counts, setCount] = useState(countsInitial);

  const changeCount = () => {
    setCount((prevCounter) => prevCounter + 1);
  };

  return {
    counts,
    changeCount,
  };
};
