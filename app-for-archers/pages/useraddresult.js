import React from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import IsCoach from '../hooks/IsCoach'
import Login from './login'
import AddResult from '../components/archer/AddResult'

export default function Useraddresult() {
    const { isDefine, coach } = IsCoach()
    const { currentUser } = useAuth()
    return (
        <>
            {!currentUser && <Login />}
            {currentUser && <AddResult />}
        </>
    )
}
