import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { PhoneBookItem } from './PhoneBookItem';

export const PhoneBookList = () => {
  const contactList = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = () =>
    contactList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <ul>
      {filteredContacts().map(({ id, name, number }) => (
        <PhoneBookItem
          key={number}
          name={name}
          number={number}
          id={id}
        ></PhoneBookItem>
      ))}
    </ul>
  );
};

PhoneBookList.propTypes = {
  phoneBookList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};
