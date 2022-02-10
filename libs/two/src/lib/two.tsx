import './two.module.css';

/* eslint-disable-next-line */
export interface TwoProps {
  name: string;
  age: number;
  test: boolean;
}

export function Two(props: TwoProps) {
  return (
    <div>
      <p>Name is {props.name}</p>
      <p>age is {props.age}</p>
      <p>test is {props.test ? 'yes' : 'no'}</p>
    </div>
  );
}

export default Two;
