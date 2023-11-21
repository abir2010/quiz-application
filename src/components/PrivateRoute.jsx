import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return currentUser ? (
        <Route {...rest}>{(props) => <Component {...props} />}</Route>
    ) : (
        <Redirect to="/login" />
    );
}
