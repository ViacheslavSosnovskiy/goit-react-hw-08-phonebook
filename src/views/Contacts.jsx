import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../components/ContactForm'
import Filter from '../components/Filter'
import ContactList from '../components/ContactList';
import { contactsOperation, contactsSelector } from '../redux/contacts';


export default function ContactsView() {
    const dispatch = useDispatch();
    const isLoadingContact = useSelector(contactsSelector.getLoading)

    useEffect(() => {
        dispatch(contactsOperation.fetchContacts())
    }, [dispatch])

    return (
       <div>
        {isLoadingContact && <h1>Загружаем...</h1>}
            <h1>Phonebook</h1>
            
            <h3>Add contacts</h3>
            <ContactForm />
            <h3>Contacts</h3>
            <Filter />
            <ContactList />
       </div>
    )
}