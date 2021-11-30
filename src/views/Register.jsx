import { useState } from "react";
import { useDispatch } from "react-redux";
import {authOperations} from '../redux/auth'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Regiter() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeName = e => {
        setName(e.target.value)
    }

    const changeEmail = e => {
        setEmail(e.target.value)
    }

    const changePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (!name) return toast.error('Введите ваше имя!');
        if(!email) return toast.error('Введите вашу почту!')
        if (!password) return toast.error('Введите ваш пароль!');

        dispatch(authOperations.register({ name, email, password}))
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input 
                        type="name" 
                        value={name} 
                        onChange={changeName} 
                        />
                </label>

                <label>
                    Email
                    <input 
                        type="email" 
                        value={email} 
                        onChange={changeEmail} 
                        />
                </label>

                <label>
                    Password
                    <input 
                        type="password"
                        value={password}
                        onChange={changePassword}/>
                </label>

                <button type="submit">Register</button>
            </form>
        </div> 
    )
}