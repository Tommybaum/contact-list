import { useState } from 'react';
import React from "react";
import ContactRow from './ContactRow';
import { useEffect } from 'react';


const API_URL = `https://jsonplaceholder.typicode.com/users`;

let dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

const ContactList = () => {
    //const contactList = [];
    const [contacts, setContacts] = useState(dummyContacts);
    useEffect(() => {
        const fetchContacts = async () => {
          try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setContacts(data);
            console.log(data)
          } catch (error) {
            console.error(error);
          }
        }
         dummyContacts = fetchContacts()
      }, []);
    console.log(contacts)

    return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
            {contacts.map((contact) => {
          return <ContactRow key={contact.ids} contact={contact} />;
        })}
          </tbody>
        </table>
    ); 
}
export default ContactList