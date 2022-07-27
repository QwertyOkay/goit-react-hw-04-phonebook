import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'


import styles from './ContactForm.module.css';
import { useState } from 'react';

export const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

   const  handelChange = e => {
    const { name, value } = e.target;

      switch (name) {
        case 'name':
          setName(value)
          break
        case 'number':
          setNumber(value)
          break
        default:
          throw new Error('Error')
}
  };

   const handelSubmit = e => {
    e.preventDefault();

  onSubmit(({ name, number, id: nanoid()}));
    formReset();
  };

  const  formReset = () => {
    setName('')
    setNumber('')
  };

  return (
      <>
        <form className={styles.form} onSubmit={handelSubmit}>
          <label className={styles.label}>
            Name
            <input
              type="text"
            name="name"
              value={name}
              onChange={handelChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handelChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={styles.submitBtn} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};