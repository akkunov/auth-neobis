import React from 'react';
import {useSelector} from "react-redux";

function useAuth() {
    const user = useSelector(state => state.user);
    const isAuth = !!user.email && !!user.id
    return {isAuth}
}

export default useAuth;