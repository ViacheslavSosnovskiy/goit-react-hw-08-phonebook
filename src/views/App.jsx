import {useState} from 'react'
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import s from "./App.module.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useFetchContactQuery} from '../redux/contacts/contactSlice';


export default function App() {
  const [filter, setFilter] = useState('')
  const {data, isFetching} = useFetchContactQuery();

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  }

  const getVisibleContacts = () => {
    const normilizedFilter = filter.toLowerCase();

    return data.filter(contact => contact.name.toLowerCase().includes(normilizedFilter))
  }

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <h3>Add contacts</h3>
      <ContactForm />

      <h3>Contacts</h3>
      <Filter value={filter} onChange={changeFilter}/>
      <div className={s.wrapper}>
      {data && <ContactList contacts={getVisibleContacts()}/>}
      </div>
      <ToastContainer autoClose={4000} />
    </div>
  );
}