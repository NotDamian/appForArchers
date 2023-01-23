import React, { useState } from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import UserDashBoard from '../components/archer/UserDashBoard'
import CoachDashBoard from '../components/coach/CoachDashBoard'
import Login from './login'
import BeforeStart from '../components/BeforeStart'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import IsCoach from '../hooks/IsCoach'


export default function Dashboard() {
    // const [coach, setCoach] = useState(null)
    // const [archer, setArcher] = useState(null);
    // const [define, setDefine] = useState(null);

    const { isDefine, coach, nameAndRole } = IsCoach()


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
