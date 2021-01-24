import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>
      <Filter />
      <ContactList />
    </div>
  );
}
