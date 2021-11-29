import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {contactsOperation} from '../../redux/contacts/constcts-operations';
import {contactsSelector} from '../../redux/contacts/contacts-selectors'



export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch()
  const contacts = useSelector(contactsSelector.getContacts)

  const handleSubmit = (e) => {
    e.preventDefault();
    
      if(contacts.some((contact) => name === contact.name)) {
        toast.error("Такой контакт уже существует!");
        return;
      }
      dispatch(contactsOperation.addContact(name, number))
      setName('');
      setNumber('');
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
            value={name}
            onChange={e=>setName(e.currentTarget.value)}
              maxLength="22"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label>
            Number
            <input
              value={number}
              onChange={e => setNumber(e.currentTarget.value)}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
    }
