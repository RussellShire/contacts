import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListContacts from './ListContacts.js';
import CreateContact from './CreateContact.js';

function RoutesComponent() {
    return (
      <>
      <h1>title</h1>
        <Routes>
          <Route path='/' element={
            <ListContacts
              // onDeleteContact={this.removeContact}
              // contacts={this.state.contacts}
            />
          }/>
                
          <Route path='/create' element={
            <CreateContact 
              // onCreateContact={(contact) => {
              //   this.createContact(contact);
              //   // useNavigate('/')
              // }}
            />
          }/>
        </Routes>
        </>
  )
}

export default RoutesComponent