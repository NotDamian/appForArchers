import React, { useState } from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import UserDashBoard from '../components/UserDashBoard'
import CoachDashBoard from '../components/CoachDashBoard'
import Login from './login'
import BeforeStart from '../components/BeforeStart'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import IsCoach from '../hooks/IsCoach'


export default function dashboard() {
    // const [coach, setCoach] = useState(null)
    const [archer, setArcher] = useState(null);
    const [define, setDefine] = useState(null);

    const { isDefine, coach } = IsCoach()
    if (coach == 'archer') {
        setArcher(true)
    }


    const { currentUser } = useAuth()
    return (
        <>
            {currentUser && !isDefine && <BeforeStart />}
            {currentUser && !coach && isDefine && <UserDashBoard />}
            {currentUser && coach && isDefine && <CoachDashBoard />}
            {!currentUser && <Login />}
        </>
    )
}
