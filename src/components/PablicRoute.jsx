import { authSelectors } from '../redux/auth'
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function PablicRoute({children, restricted = false, redirectTo='/', ...routeProps}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    const shouldRedirect = isLoggedIn && restricted;

    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    )
}