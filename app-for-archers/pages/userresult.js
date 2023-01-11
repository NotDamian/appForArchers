import React from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import IsCoach from '../hooks/IsCoach'
import Login from './login'
import ResultCard from '../components/archer/ResultCard'

export default function userresult() {
    const { isDefine, coach } = IsCoach()
    const { currentUser } = useAuth()
    return (
        <>
            {!currentUser && <Login />}
            {currentUser && <ResultCard />}
        </>
    )
}
