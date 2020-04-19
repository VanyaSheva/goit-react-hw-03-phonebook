import React, { Component } from "react";
import ContactsList from "./ContactsList/ContactsList";
import AddContact from "./AddContact/AddContact";
import { v4 as uuidv4 } from "uuid";
import Filter from "./CotactsFilter/Filter";

const onFilterChange = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  onAddContact = (addingContact) => {
    const { name } = addingContact;
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(name + " is already exist in your contacts.");
      return;
    }
    const contactToAdd = {
      ...addingContact,
      id: uuidv4(),
    };
    this.setState((state) => ({
      contacts: [...state.contacts, contactToAdd],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  onDeleteContact = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    if (localStorage.getItem("contacts")) {
      this.setState({ contacts: JSON.parse(localStorage.getItem("contacts")) });
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = onFilterChange(contacts, filter);
    return (
      <div>
        <h1>Phonebook</h1>
        <AddContact onFormSubmit={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onFilter={this.changeFilter}
          contacts={contacts}
        />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
