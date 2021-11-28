
import {useEffect, Suspense} from 'react'; // lazy
import { useDispatch, useSelector } from 'react-redux';
import {Switch} from 'react-router-dom';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import PrivateRoute from '../PrivateRoute'
import PablicRoute from '../PablicRoute'
import {authOperations} from '../../redux/auth/auth-operations'
import {authSelectors} from '../../redux/auth/auth-selectors'
import Loader from 'react-loader-spinner'

export default function App() {
    const dispatch = useDispatch()
    const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurren)

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
                        <HomeView />
                    </PablicRoute>

                    <PablicRoute path='/register' restricted>
                        <RegiterView />
                    </PablicRoute>

                    <PablicRoute path='/login' redirectTo='/contacts' restricted>
                        <LoginView />
                    </PablicRoute>

                    <PrivateRoute path='/contacts' redirectTo='/login'>
                        <Todo />
                    </PrivateRoute>
                </Suspense>
            </Switch>
        </Container>
        )    
    )
}