import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm ';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleDelete = event => {
    setContacts(contacts.filter(contact => contact.name !== event.target.name));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      name: event.target.name.value,
      number: event.target.number.value,
    };

    contacts.find(contact => contact.name === event.target.name.value)
      ? window.alert(event.target.name.value + 'is already in contacts.')
      : setContacts([...contacts, newContact]);
    const form = event.target;
    form.reset();
  };

  const handleChangeSerchContacts = evt => {
    setFilter(evt.target.value.toLowerCase());
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Section title="PhoneBook">
        <ContactForm handleSubmit={handleSubmit}></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={handleChangeSerchContacts} />

        <Contacts
          contacts={contacts}
          filter={filter}
          handleDelete={handleDelete}
        ></Contacts>
      </Section>
    </div>
  );
};

export default App;
