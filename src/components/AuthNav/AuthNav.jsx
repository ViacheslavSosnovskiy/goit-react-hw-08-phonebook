import {NavLink} from 'react-router-dom'

export default function AuthNav() {

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

    return (
        <div>
            <NavLink 
              to='/register' 
              exact 
              style={styles.link} 
              activeStyle={styles.activeLink}
            >
              Регистрация
            </NavLink>

            <NavLink 
              to='/login' 
              exact 
              style={styles.link} 
              activeStyle={styles.activeLink}
            >
              Войти
            </NavLink>
        </div>
    )
}