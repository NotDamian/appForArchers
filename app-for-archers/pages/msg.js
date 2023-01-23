import React from 'react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import Login from './login'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import IsCoach from '../hooks/IsCoach'
import CoachMsg from '../components/coach/CoachMsg'
import ArcherMsg from '../components/archer/ArcherMsg'

export default function Msg() {
    const { isDefine, coach, nameAndRole, uidCoach } = IsCoach()


    const { currentUser } = useAuth()
    return (
        <>
            {currentUser && !coach && isDefine && <ArcherMsg>{uidCoach}</ArcherMsg>}
            {currentUser && coach && isDefine && <CoachMsg />}
            {!currentUser && <Login />}
        </>
    )
}
