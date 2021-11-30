import axios from 'axios'

import {addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError
    } from './contacts-actions'

// axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactRequest);
    try {
        const {data} = await axios.get('/contacts')
        dispatch(fetchContactSuccess(data))
    } catch (error) {
        dispatch(fetchContactError(error))
    }
}


const addContact = (name, number) => async dispatch => {
    const contact = {
        name,
        number
    }
    dispatch(addContactRequest())
    try {
        const {data} = await axios.post('/contacts', contact);
        dispatch(addContactSuccess(data))
    } catch (error) {
        dispatch(addContactError(error))
    }
}

const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest())
    try {
        const res = await axios.delete(`/contacts/${contactId}`)
        dispatch(deleteContactSuccess(contactId))
        console.log(res)
    } catch (error) {
        dispatch(deleteContactError(error))
    }
}
const contactsOperation = {
    fetchContacts,
    addContact,
    deleteContact,
}

export default contactsOperation