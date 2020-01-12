import React from 'react';
import T from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <li className={styles.ContactListItem}>
      <p>
        {contact.name} : {contact.phone}
      </p>
      <button
        className={styles.Button}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: T.object.isRequired,
  deleteContact: T.func.isRequired,
};

export default ContactItem;
