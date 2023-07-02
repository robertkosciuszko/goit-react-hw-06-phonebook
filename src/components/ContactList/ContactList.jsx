import React from 'react';
import propTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div className={css.wraperContactList}>
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactListItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
