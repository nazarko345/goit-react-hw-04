import css from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

export default function ContactList({ contactDelete, contacts }) {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contactDelete={contactDelete}
          contacts={contact} 
        />
      ))}
    </ul>
  );
}
