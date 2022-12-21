import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = sessionStorage.getItem('Token');

    if (!token) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return (
        <Outlet/>
    )
}


export default PrivateRoute;