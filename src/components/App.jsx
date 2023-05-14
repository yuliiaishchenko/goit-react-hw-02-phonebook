import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import Filter  from "./Filter/Filter";
import initialContacts from './contacts.json';
import { nanoid } from "nanoid";


export class App extends Component {

  state = {
    contacts: initialContacts,
    filter: '',
  };

  // addContact = newContact => {
  //   this.state.contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().trim() ===
  //         newContact.name.toLowerCase().trim() ||
  //       contact.number.trim() === newContact.number.trim()
  //   ).length
  //     ? alert(`${newContact.name}: is already in contacts`)
  //     : this.setState(prevState => {
  //         return {
  //           contacts: [newContact, ...prevState.contacts],
  //         };
  //       });
  // };


  addContact = (name, number)=> {
   const formattedNumber = this.formattedNumber(number);
   const repeatName = this.state.contacts.some(
     el => el.name.toLowerCase === name.toLowerCase()
   );
   if(repeatName) {
    return alert (`{name} is already a contact`);
   }
   const contact = {
    id: nanoid(),
    name,
    number: formattedNumber,
   };
   this.setState(({contacts}) => ({ contacts: [contact, ...contacts]}));
}
deleteContact = contactId => {
  this.setState(prevState => {
    return {
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactId
      ),
    };
  });
};

changeFilter = e => {
  this.setState({ filter: e.currentTarget.value.toLowerCase()});
};

getVisibleContacts = () => {
  const { filter, contacts } = this.state;
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};

render(){
  const { filter } = this.state;
  const visibleContacts = this.getVisibleContacts();

  return(
    <section> 
    <h1>Phonebook</h1>
    <ContactForm onAddContact={this.addContact}/>
   <Filter value={filter} onChange={this.changeFilter}/>
   <ContactList contacts={visibleContacts} onDelete={this.deleteContact}/>
  
    </section>
  )
}
}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
