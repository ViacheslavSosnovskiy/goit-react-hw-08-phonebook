// import { display } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from '../redux/auth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
     const dispatch = useDispatch();
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

    const changeEmail = e => {
        setEmail(e.target.value)
    }

    const changePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(!email) return toast.error('Введите вашу почту !')
        if (!password) return toast.error('Введите ваш пароль !');

        dispatch(authOperations.logIn({ email, password}))
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input 
                        type="email" 
                        value={email} 
                        onChange={changeEmail} 
                        required 
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"/>
                </label>
                <label>
                    Password
                    <input 
                        type="password"
                        value={password}
                        onChange={changePassword}/>
                </label>

                <button type="submit">Log in</button>
            </form>
        </div> 
    )
}