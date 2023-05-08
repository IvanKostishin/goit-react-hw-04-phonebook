import css from './ContactForm.module.css';
import propTypes from 'prop-types';
import React, { useState } from 'react';

const ContactForm = ({
  handleSubmit,
  onChangeName,
  onChangeNumber,
  name,
  number,
}) => {
  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        onChange={onChangeName}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        onChange={onChangeNumber}
        value={number}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
