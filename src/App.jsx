import React, { useState, useEffect } from 'react';
import ContactList from './Components/ContactList/ContactsList';
import AddContact from './Components/AddContacts/AddContact';
import FilterSearch from './Components/FilterSearch/FilterSearch';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      const value = localStorage.getItem('contacts');
      if (!value) {
        return;
      }
      setContacts(JSON.parse(value));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const unique = contacts.find(
      item => item.name.toLowerCase() === contact.name,
    );

    if (unique !== undefined) {
      NotificationManager.warning(
        `${contact.name} already exist`,
        'Try another name',
        3000,
      );
      return;
    }

    setContacts(prev => [contact, ...prev]);
  };
  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filteredContacts = () => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <>
      <AddContact addContact={contact => addContact(contact)} />
      <FilterSearch filter={filter} setFilter={setFilter} />
      <ContactList
        contacts={filteredContacts()}
        deleteContact={deleteContact}
      />
      <NotificationContainer />
    </>
  );
}
