import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactsList.module.css";
import PropTypes from "prop-types";

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.list}>
    {contacts.map((contact) => (
      <li key={contact.id} className={styles.listItem}>
        <Contact {...contact} onDelete={() => onDeleteContact(contact.id)} />
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
