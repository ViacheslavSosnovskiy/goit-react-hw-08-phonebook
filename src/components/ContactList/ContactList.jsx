// import s from "./contact.module.css";
import {contactsSelector} from '../../redux/contacts/contacts-selectors'
import {contactsOperation} from '../../redux/contacts/constcts-operations'
import { useDispatch, useSelector } from "react-redux";



export default function ContactList() {
const dispatch = useDispatch()
const contacts = useSelector(contactsSelector.getContacts)
  
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id} {...contact}>
           <p>{contact.name}</p>
           <p>{contact.number}</p>
          <button onClick={() => dispatch(contactsOperation.deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
