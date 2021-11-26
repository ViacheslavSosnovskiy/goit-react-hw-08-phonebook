import {useSelector, useDispatch} from 'react-redux';
import {authSelectors} from '../../redux/auth/auth-selectors'
import {authOperation} from '../../redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png'

const styles = {
    container: {
        display: 'flex',
        alingItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
}

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    const avatar = defaultAvatar;

    return (
        <div style={styles.container}>
            <img src={avatar} alt="" width="32" style={styles.avatar}/>
            <span style={styles.name}>Добро пожаловать, {name}</span>
            <button type="button" onClick={() => dispatch(authOperation.logOut())}>
                Выйти
            </button>
        </div>
    );
}