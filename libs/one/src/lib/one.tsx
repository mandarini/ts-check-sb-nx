import './one.module.css';

/* eslint-disable-next-line */
export interface OneProps {
  name: string;
  age: number;
  test: boolean;
}

export function One(props: OneProps) {
  return (
    <div>
      <h1>Welcome to One!</h1>
      <p>Name is {props.name}</p>
      <p>age is {props.age}</p>
      <p>test is {props.test ? 'yes' : 'no'}</p>
    </div>
  );
}

export default One;
