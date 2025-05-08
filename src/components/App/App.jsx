import css from "./App.module.css";

import initualContacts from "../../contacts.json";

import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid/non-secure";

export default function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContact] = useState(() => {
    const savedData = localStorage.getItem("contacts");
    if (savedData !== null) {
      return JSON.parse(savedData);
    }
    return initualContacts;
  }
)
 
  const contactAdd = (newContact) => {
    setContact((prevContacts) => [
      ...prevContacts,
      { ...newContact, number: newContact.tel, id: nanoid() },
    ]);
  };

  const contactDelete = (currentId) => {
    setContact((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== currentId);
    });
  };

  const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm contactAdd={contactAdd} />
      <SearchBox onFilter={setFilter} value={filter} />
      <ContactList contactDelete={contactDelete} contacts={filtredContacts} />
    </div>
  );
}
