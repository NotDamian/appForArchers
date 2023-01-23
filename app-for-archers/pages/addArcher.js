import React from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import IsCoach from '../hooks/IsCoach'
import Login from './login'
import CoachAddArcher from '../components/coach/CoachAddArcher'

export default function AddArcher() {
    const { currentUser } = useAuth()
    return (
        <>
            {!currentUser && <Login />}
            {currentUser && <CoachAddArcher />}
        </>
    )
}
