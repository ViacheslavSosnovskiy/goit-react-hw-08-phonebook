import s from "./filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {contactsSelector, changeFilter} from '../../redux/contacts'


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
