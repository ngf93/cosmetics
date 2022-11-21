import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const AuthRoute = ({admin, children}) => {
    const auth = useSelector((state) => state?.auth)
    if (admin) {
        return auth.isAuth && auth.user.role == 'admin' ? children : <Navigate to="/admin/login" />
    } else {
        return auth.isAuth ? children : <Navigate to="/admin/login" />
    }
}

export default AuthRoute
