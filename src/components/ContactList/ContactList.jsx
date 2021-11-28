import s from "./contact.module.css";
// import {useSelector, useDispatch} from 'react-redux'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import {useSelector} from 'react-redux'
import {useDeleteContactMutation} from '../../redux/contacts/contactSlice';

export default function ContactList({contacts}) {
  const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation()

  
  return (
    <ul className={s.contact}>
      {contacts.map((contact) => (
        <li key={contact.id} {...contact} className={s.item}>
           <p className={s.name}>{contact.name}</p>
           <p>{contact.number}</p>
           <button className={s.button} onClick={() => deleteContact(contact.id)} disabled={isDeleting}>
        Delete
        {isDeleting && (
          <Loader
            type="ThreeDots"
            color="#000000"
            height={12}
            width={12}
            />
        )}
      </button>
        </li>
      ))}
    </ul>
  );
};

// const mapStateToProps = state => ({
//   const {filter, items} = state.contacts;
//   const visibleContacts = getVisibleContacts(items, filter)
//   return {constacts: visibleContacts}
// })

// const mapStateToProps = ({contacts: {items, filter}}) => ({
//   // contacts: getVisibleContacts(state.contacts.items, state.contacts.filter)
//   contacts: getVisibleContacts(items, filter)
// }) 

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(contactsActions.deleteContact(id))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
