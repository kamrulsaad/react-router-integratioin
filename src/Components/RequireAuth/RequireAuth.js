import React from 'react';
import { getAuth } from 'firebase/auth'
import app from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {

    const auth = getAuth(app)
    const location = useLocation();
    const [user ] = useAuthState(auth);

    if(!user) {
        return <Navigate to= '/login' state={{from : location}} replace/>
    }

    return children;
};

export default RequireAuth;