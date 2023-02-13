import { Item } from './PhoneBookList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/phoneSlice';
export const PhoneBookItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <button onClick={() => dispatch(removeContact(id))}>Delete</button>
    </Item>
  );
};
