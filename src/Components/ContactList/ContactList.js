import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../Redux/actions';
import { filteredContacts } from '../../Redux/selectors';

const ContactItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.item}>
      <span className={styles.span}>{name}:</span>
      <span className={styles.span}>{number}</span>
      <button className={styles.button} onClick={() => onRemove(id)}>
        X
      </button>
    </li>
  );
};

const ContactList = () => {
  const contacts = useSelector(filteredContacts);
  const dispatch = useDispatch();

  const deleteContact = id => dispatch(contactsActions.deleteContact(id));

  if (contacts.length === 0) return null;
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem key={contact.id} {...contact} onRemove={deleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
