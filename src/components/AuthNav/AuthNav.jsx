import {NavLink} from 'react-router-dom

export default function AuthNav() {
    return (
        <div>
            <NavLin to='/register' exact >Регистрация</NavLin>
            <NavLink to='/login' exact>Войти</NavLink>
        </div>
    )
}