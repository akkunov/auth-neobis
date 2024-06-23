import React from 'react';
import useAuth from "../hook/useAuth.js";
import {useNavigate} from "react-router-dom";

function WithAuth({children}) {
    const {isAuth} = useAuth();
    const navigate = useNavigate()
    return (props) => {

        return isAuth? (
            <children {...props} />
        ): (
            <p>Пожалуйста авторизуйтесь</p>
        )
    }
}

export default WithAuth;