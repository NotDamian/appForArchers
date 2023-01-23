import React from 'react'
import UserEquipment from '../components/archer/UserEquipment'
import { AuthProvider, useAuth } from '../context/AuthContext'
import IsCoach from '../hooks/IsCoach'
import Login from './login'

export default function Equipment() {
    const { isDefine, coach } = IsCoach()
    const { currentUser } = useAuth()
    return (
        <>
            {!currentUser && <Login />}
            {currentUser && <UserEquipment />}
        </>
    )
}
