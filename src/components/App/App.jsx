
import {useEffect, Suspense, lazy} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Switch} from 'react-router-dom';
import {authOperations, authSelectors} from '../../redux/auth'
import Loader from 'react-loader-spinner'
import PrivateRoute from '../PrivateRoute'
import PablicRoute from '../PablicRoute'
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';

const HomePage = lazy(() => import('../../views/HomePage'));
const Login = lazy(() => import('../../views/Login'));
const Register = lazy(() => import('../../views/Register'));
const Contacts = lazy(() => import('../../views/Contacts'))

export default function App() {
    const dispatch = useDispatch()
    const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent)

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser())
    }, [dispatch])

    return (
        !isFetchingCurrentUser && (
        <Container>
            <AppBar />
            
            <Switch>
                <Suspense fallback={
                    <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                }>
                    <PablicRoute exact path='/' >
                        <HomePage />
                    </PablicRoute>

                    <PablicRoute exact path='/register' restricted>
                        <Register />
                    </PablicRoute>

                    <PablicRoute exact path='/login' redirectTo='/contacts' restricted>
                        <Login/>
                    </PablicRoute>

                    <PrivateRoute path='/contacts' redirectTo='/login'>
                        <Contacts />
                    </PrivateRoute>
                </Suspense>
            </Switch>
        </Container>
        )    
    )
}