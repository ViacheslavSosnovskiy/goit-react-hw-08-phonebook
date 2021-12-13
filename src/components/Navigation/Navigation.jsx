import {useSelector} from 'react-redux'
import {authSelectors} from '../../redux/auth'
import {NavLink} from 'react-router-dom'


export default function Navigation() {

    const styles = {
        link: {
          display: 'inline-block',
          textDecoration: 'none',
          padding: 12,
          fontWeight: 700,
          color: '#303C6C',
        },
        activeLink: {
          color: '#F4976C',
        },
      };

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <nav>
            <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>Главная</NavLink>

            {isLoggedIn && (
                <NavLink to='/contacts' exact style={styles.link} activeStyle={styles.activeLink}>Заметки</NavLink>
            )}
        </nav>
        
    )
}
