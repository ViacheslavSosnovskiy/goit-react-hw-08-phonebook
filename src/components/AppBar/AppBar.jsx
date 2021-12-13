import {useSelector} from 'react-redux'
import {authSelectors} from '../../redux/auth'
import Navigation from '../Navigation'
import UserMenu from '../UserMenu'
import AuthNav from '../AuthNav'

export default function AppBar() {

    const styles = {
        header: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #303C6C',
        },
      };

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <header style={styles.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}