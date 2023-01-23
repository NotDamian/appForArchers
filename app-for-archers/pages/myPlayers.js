import React from 'react'
import Login from './login'
import CoachMyPlayers from '../components/coach/CoachMyPlayers'
import { AuthProvider, useAuth } from '../context/AuthContext'

export default function MyPlayers() {
    const { currentUser } = useAuth()
    return (
        <>
            {!currentUser && <Login />}
            {currentUser && <CoachMyPlayers />}
        </>
    )
}
