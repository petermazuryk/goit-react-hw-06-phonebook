import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import T from 'prop-types';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: T.array.isRequired,
  deleteContact: T.func.isRequired,
};

export default ContactsList;
