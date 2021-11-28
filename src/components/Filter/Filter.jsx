import s from "./filter.module.css";
// import {useSelector, useDispatch} from 'react-redux'
// import {getFilter} from '../../redux/contacts/contacts-selectors'
// import {changeFilter} from '../../redux/contacts/contacts-actions'

export default function Filter({value, onChange}) {
// const value = useSelector(getFilter)
// const dispatch = useDispatch()

  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
        // onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};
