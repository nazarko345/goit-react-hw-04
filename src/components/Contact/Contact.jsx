import css from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ contacts, contactDelete }) {
  return (
    <li className={css.item}>
      <span className={css.span}>
        <FaUserAlt />
        {contacts.name}
      </span>
      <span className={css.span}>
        <BsFillTelephoneFill />
        {contacts.number}
      </span>
      <button
        onClick={() => contactDelete(contacts.id)}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
}