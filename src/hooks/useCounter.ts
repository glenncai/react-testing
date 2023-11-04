import { useState } from 'react';
import { UseCounterType } from './useCounter.types';

export const useCounter = ({ initialCount = 0 }: UseCounterType = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return {
    count,
    increment,
    decrement,
  };
};
