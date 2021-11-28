import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../component/ContactForm'
import Filter from '../component/Filter'
import ContactList from '../components/ContactList';
import { contactsOperation } from '../redux/contacts/contacts-operations';
import {contactsSelector} from '../redux/contacts/contacts-selectors'

export default function ContactsView() {
    const dispatch = useDispatch();
    const isLoadingContact = useSelector(contactsSelector.getLoading)

    useEffect(() => {
        dispatch(contactOperation.fetchContacts())
    }, [dispatch])

    return (
       <>
        <ContactForm />
        <Filter />
        <ContactList />
       </>
    )
}