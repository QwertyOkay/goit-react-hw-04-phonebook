import React from 'react';
import { nanoid } from 'nanoid';
import { HeadTitle } from './PhoneBook.styled';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name] = useState('');
  const [number] = useState('');

  useEffect(() => {
    const contactsLocalStorage = JSON.parse(localStorage.getItem('contacts'));

    if (contactsLocalStorage) {
      setContacts(contactsLocalStorage);
    }
  }, []);

  const handleSubmit = (e, { resetForm }) => {
    setContacts(prevState => {
      if (
        prevState.find(el =>
          el.name.toLowerCase().includes(e.name.toLowerCase())
        )
      ) {
        alert(`${e.name} is already in contacts.`);
        return prevState;
      } else {
        const newStateContacts = [...prevState];

        newStateContacts.push({ id: nanoid(), name: e.name, number: e.number });

        localStorage.setItem('contacts', JSON.stringify(newStateContacts));

        resetForm();

        return newStateContacts;
      }
    });
  };

  const handleFilter = e => {
    setFilter(e);
  };

  const getVisibleContacts = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(el =>
      el.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const deleteContact = e => {
    const newContacts = contacts.filter(el => el.id !== e);
    setContacts([...newContacts]);

    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <HeadTitle>Phonebook</HeadTitle>

      <ContactForm
        initialValues={{ contacts, filter, name, number }}
        onSubmit={handleSubmit}
      />

      <HeadTitle>Contacts</HeadTitle>

      <Filter
        contacts={contacts}
        filterState={filter}
        handleFilter={handleFilter}
      />

      <ContactList
        filteredArr={visibleContacts}
        deleteContact={deleteContact}
      />
    </>
  );
}

ContactForm.propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

Filter.propTypes = {
  contacts: PropTypes.array,
  filterState: PropTypes.string,
  handleFilter: PropTypes.func,
};

ContactList.propTypes = {
  filteredArr: PropTypes.array,
  deleteContact: PropTypes.func,
};