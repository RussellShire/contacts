import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import ListContacts from './ListContacts.js';
import CreateContact from './CreateContact.js';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: [],
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts: contacts })
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  createContact(contact) {
    ContactsAPI.create(contact)
    
    .then(contact => {
      this.setState(state => {console.log('state log', state)
      
        return {
        contacts: state.contacts.concat([ contact ])
        // contacts: [...state.contacts, contact] // either works here
      }});
    })
  }

  render() {
    return (
      <div className='app'>
        <Routes>
          <Route path='/' element={
            <ListContacts
              onDeleteContact={this.removeContact}
              contacts={this.state.contacts}
            />
          }/>
                
          <Route path='/create' element={
            <CreateContact 
              onCreateContact={(contact) => {
                this.createContact(contact);
              }}
            />
          }/>
        </Routes>
      </div>
    ) 
  }
}

export default App
