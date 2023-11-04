import { FC } from 'react';
import { GreetTypes } from './greet.types';

const Greet: FC<GreetTypes> = (props: GreetTypes) => {
  return <div>Hello {props.name}</div>;
};

export default Greet;
