import React from 'react';
import { Outlet ,Navigate } from 'react-router-dom'
import useFirebase from '../../../Firebase/useFirebase'

const PriavateRoute = () => {
    const {user} = useFirebase()

    return user ? <Outlet/> : <Navigate to="/login" />
        
    
};

export default PriavateRoute;