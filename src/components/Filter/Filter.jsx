import { nanoid } from 'nanoid';
export const Filter = ({ onChange }) => {
  return <input id={nanoid()} type="text" onChange={onChange} />;
};
