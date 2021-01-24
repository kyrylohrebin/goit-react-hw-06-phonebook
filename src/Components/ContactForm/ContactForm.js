import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../Redux/selectors';
import * as actions from '../../Redux/actions';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleFormChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const isContactUnique = nameUnique => {
    const nameHandler = nameUnique.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === nameHandler);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const nameNotUnique = isContactUnique(name);

    if (nameNotUnique) {
      alert(`${name} is already exist`);
    } else {
      const contact = { id: uuid(), name, number };
      dispatch(actions.addContact(contact));
    }

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Enter name"
        value={name}
        onChange={handleFormChange}
      />
      <input
        className={styles.input}
        type="tel"
        name="number"
        placeholder="Enter phone number"
        value={number}
        onChange={handleFormChange}
      />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
