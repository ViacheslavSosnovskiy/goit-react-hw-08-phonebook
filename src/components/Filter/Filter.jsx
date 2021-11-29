import s from "./filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {contactsSelector} from '../../redux/contacts/contacts-selectors'
import {changeFilter} from '../../redux/contacts/contacts-actions'


export default function Filter() {
const filter = useSelector(contactsSelector.getFilter)
const dispatch = useDispatch()

  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};
