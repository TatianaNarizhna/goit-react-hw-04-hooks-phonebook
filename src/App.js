// import React, { Component } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/Container/Container";
import Input from "./components/ContactForm/InputForm";
import Filter from "./components/Filter/Filter";
import PhonebookList from "./components/PhonebookList/PhonebookList";
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {

  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');
  console.log(contacts)

   const formSubmit = (data) => {
    console.log(data);
    // const { contacts } = this.state;
    const newContact = contacts.some((contact) => contact.name === data.name);
    if (newContact) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const contactData = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    setContacts((prevState) => [...prevState, contactData]);
  };

   const deleteItem = listId => {
    setContacts(state => state.filter(contact => contact.id !== listId))
  };

   const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

   const getVisibleContacts = () => {
    // const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

    return (
      <Container>
        <h1>Phonebook</h1>
        <Input onFormSubmit={formSubmit} />
        <Filter value={filter} onChangeFilter={changeFilter} />
        <PhonebookList
          contacts={getVisibleContacts()}
          title="Contacts"
          onDeleteList={deleteItem}
        />
      </Container>
    );
}


