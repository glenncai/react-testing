import { FC } from 'react';
import { CounterTwoTypes } from './counter-two.types';

const CounterTwo: FC<CounterTwoTypes> = (props: CounterTwoTypes) => {
  const { count, handleIncrement, handleDecrement } = props;

  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  );
};

export default CounterTwo;
