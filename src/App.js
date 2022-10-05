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
    // UDACITY CODE: Not working, wipes the screen until refresh
    // .then(contact => {
    //   this.setState(state => ({
    //     contacts: state.contacts.contact([ contact ])
    //   }));
    // })

    this.state.contacts.push(contact) // My solution that works

    // Udacity recommends having history router here, but that is depreciated 
    // so the navigation has been moved to within the create contact component as useNavigate
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
