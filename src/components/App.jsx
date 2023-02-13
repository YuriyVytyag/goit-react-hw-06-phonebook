import { useEffect } from 'react';
import { PhoneBookForm } from './PhoneBook/PhoneBook';
import { Filter } from './Filter/Filter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/phoneSlice';

const CONTACTS_KEY = 'contacts';

export function App() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(
    () => localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const checkDuplicate = value =>
    contacts.some(({ name }) => name.toLowerCase() === value.toLowerCase());

  const onChange = element => {
    dispatch(filterContact(element.target.value));
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <PhoneBookForm checkDuplicate={checkDuplicate} />
      <h2>Contacts</h2>
      <Filter onChange={onChange} />
      <PhoneBookList contactList={filterContacts} />
    </div>
  );
}
