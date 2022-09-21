import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
        {/* <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
          />  */}
        {/* <Route exact path='/' render={() => (
          */}
        {/* )}/> */}
        <ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact}
          onNavigate={() => {
            this.setState({ screen: 'create'})
          }}
        />
        {/* <Route path="/create" component={CreateContact}> */}
          <CreateContact />
        {/* </Route> */}
        
      </div>
    )
  }

}

export default App;
