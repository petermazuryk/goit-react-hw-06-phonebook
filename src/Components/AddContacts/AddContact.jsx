import React, { useState } from 'react';
import styles from './AddContacts.module.css';
import shortid from 'shortid';
import T from 'prop-types';

const AddContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    addContact({
      id: shortid.generate(),
      name,
      phone,
    });
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.Form}>
      <input
        className={styles.Input}
        placeholder="Name"
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        autoComplete="off"
      />

      <input
        className={styles.Input}
        placeholder="Phone"
        type="number"
        name="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        autoComplete="off"
      />

      <button className={styles.Button} type="submit">
        Add contact
      </button>
    </form>
  );
};

AddContact.propTypes = {
  addContact: T.func.isRequired,
};

export default AddContact;
