import {useSelector} from 'react-redux'
import {authSelectors} from '../../redux/auth'
import {NavLink} from 'react-router-dom'

//  style={link} activeStyle={activeLink}

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <nav>
            <NavLink to="/" exact  >Главная</NavLink>

            {isLoggedIn && (
                <NavLink to='/contacts' exact >Заметки</NavLink>
            )}
        </nav>
        
    )
}
