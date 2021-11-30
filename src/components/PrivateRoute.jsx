import { authSelectors } from '../redux/auth'
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function PrivateRoute({children, redirectTo = '/', ...routeProps}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Navigate to={redirectTo} />}
        </Route>
    )
}