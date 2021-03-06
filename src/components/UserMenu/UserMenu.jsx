import {useSelector, useDispatch} from 'react-redux';
import {authSelectors,authOperations} from '../../redux/auth'
import defaultAvatar from './default-avatar.jpg'

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
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>
                Выйти
            </button>
        </div>
    );
}