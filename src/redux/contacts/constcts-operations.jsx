// import axios from 'axios'

// import {addContactRequest,addContactSuccess, addContactError,deleteContactRequest,deleteContactSuccess,deleteContactError } from './contacts-actions'
// import {createAsyncThunk} from '@reduxjs/toolkit'

// // export const addContact = text => dispatch => {
// //     const contact = {
// //         text, 
// //         completed: false,
// //         // payload: {
// //             //         id: uuidv4(),
// //             //         name,
// //             //         number,
// //             //       },
// //     }

// //     dispatch(addContactRequest)

// //     axios.post('/contacts, contacts')
// //     .then(({data}) => dispatch(addContactSuccess(data)))
// //     .catch(error => dispatch(addContactError(error)))
// // }
// export const addContact = createAsyncThunk('contact/fetchBooks',
//     async () => {
//         const 
//     }
// )

// export const deleteContact = contactId => dispatch => {
//     dispatch(deleteContactRequest())

//     axios
//     .delete(`/contact/${contactId}`)
//     .then(() => dispatch(deleteContactSuccess(contactId)))
//     .catch(error => dispatch(deleteContactError(error)))
//     dispatch(deleteContactRequest())
//     // try {
//     //     const {data} = await axios.get(`/contact/${contactId}`)
    
//     //     dispatch(deleteContactSuccess(contactId))
//     // } catch (error) {
//     //     dispatch(deleteContactError(error))
//     // }
// }