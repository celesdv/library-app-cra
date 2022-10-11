import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const PrivateRoutes = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

    if (!!currentUser) {
        return children;
    }
    // si no se encuentra logeado nos redirige al login
    return <Navigate to="/login" />;
}

export default PrivateRoutes;