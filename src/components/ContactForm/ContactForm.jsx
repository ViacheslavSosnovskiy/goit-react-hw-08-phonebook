import s from "./contactForm.module.css";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {useCreateContactMutation, useFetchContactQuery} from '../../redux/contacts/contactSlice'


export default function ContactForm() {
const [createContact, {isLoading}] = useCreateContactMutation();
const {data: contacts} = useFetchContactQuery()

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    const newContact = {
      name,
      number,
    }
      if(contacts.some((contact) => name === contact.name)) {
        toast.error("This contact is already exist!");
        e.currentTarget.reset()
        return;
      }
      createContact(newContact);
      e.currentTarget.reset()
  };

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label className={s.label}>
            Name
            <input
              maxLength="22"
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <button type="submit" className={s.button} disabled={isLoading}>
            Add contact 
              {isLoading && (
                <Loader 
                type="ThreeDots"
                color="#000000"
                height={12}
                width={12}
                />
              )}
          </button>
        </form>
      </>
    );
    }
