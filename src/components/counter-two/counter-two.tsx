import { CounterTwoProps } from './counter-two.types';

export const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>
      {/* wenn die Props handleIncrement übergeben wird (ist optional!), dann wird der Increment-Button gerendert */}
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {/* wenn die Props handleDecrement übergeben wird (ist optional1), dann wird der Decrement-Button gerendert */}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
};
