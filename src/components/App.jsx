import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  hendleAddContacts = e => {
    e.preventDefault();
    const contactName = e.target.elements.name.value;
    const contactNumber = e.target.elements.number.value;
    const obj = {
      name: contactName,
      number: contactNumber,
      id: nanoid(),
    };
    this.setState(prev => {
      return {
        name: contactName,
        number: contactNumber,
        contacts: [...prev.contacts, obj],
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };


  render() {
    console.log(this.state);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <Phonebook props={this.state} onSubmit={this.hendleAddContacts} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <Contacts contacts={this.state.contacts} filter={this.state.filter} />
      </div>
    );
  }
}
