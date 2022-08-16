// import { useState } from 'react';
import AppContainer from './AppContainer';
import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
// import { useEffect } from 'react';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // const removeContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // const addContact = (name, number) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   const findContact = contacts.find(contact =>
  //     contact.name.toLowerCase().includes(name.toLowerCase())
  //   );

  //   findContact
  //     ? alert(`This ${name} is already in contact`)
  //     : setContacts([contact, ...contacts]);
  // };

  // const changeFilter = evt => {
  //   setFilter(evt.currentTarget.value);
  // };

  // const visibleContacts = () => {
  //   const normalizeFilter = filter.toLowerCase();

  //   if (contacts.length !== 0) {
  //     return contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(normalizeFilter)
  //     );
  //   }
  //   return;
  // };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <AppContainer title="Phonebook">
      <Container title="You can add new contacts below:">
        <ContactForm />
      </Container>
      <Container title="Your Contacts:">
        <Filter />
        <ContactList />
      </Container>
    </AppContainer>
  );
};
