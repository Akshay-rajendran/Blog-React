import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Login from '../Login'

function UserRoute({ children }) {
    const { loggedinuser } = useContext(UserContext)
    return (
        <>
            {
                loggedinuser ? children : <Login />
            }

        </>
    )
}

export default UserRoute