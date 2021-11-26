
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import {authOperations} from '../../redux/auth/auth-operations'

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser())
    }, [dispatch])

    return (
        <Container>
            <AppBar />
            
        <Switch>
            <Route exact path='/' />
            <Route path='/regiter' />
            <Route path='/login' />
            <Route path='/contacts' />
        </Switch>
        </Container>
    )
}