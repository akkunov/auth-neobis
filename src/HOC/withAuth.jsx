import React from 'react';
import useAuth from "../hook/useAuth.js";
import {useNavigate} from "react-router-dom";

function WithAuth({ children }) {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuth) {
            navigate("/login"); // Navigate to the login page if not authenticated
        }
    }, [isAuth, navigate]);

    if (!isAuth) {
        return
    }

    return children;
}


export default WithAuth;