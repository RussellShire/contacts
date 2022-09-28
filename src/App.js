import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListContacts from './ListContacts.js';
import CreateContact from './CreateContact.js';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    screen: 'list',
    contacts: []
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
            <CreateContact />
          }/>
        </Routes>
      </div>
    ) 
  }
}

export default App;
