import React, { useState, useEffect, useRef } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthProvider, useAuth } from '../context/AuthContext'


export default function IsCoach() {
    const [isDefine, setisDefine] = useState(null);
    const [coach, setCoach] = useState(null)
    const [nameAndRole, setNameAndRole] = useState({})
    const { currentUser } = useAuth()

    useEffect(() => {
        async function checkIsCoach() {
            try {
                const docRef = doc(db, 'IsCoach', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setisDefine(true)
                    setNameAndRole(docSnap.data().IsCoach)
                    if (docSnap.data().IsCoach.role == 'archer') {
                        setCoach(false)
                    } else {
                        setCoach(true)
                    }
                } else {
                    setisDefine(false)
                }
            } catch (err) {
                console.log(err)
            }
        }
        checkIsCoach()
    },);

    return { isDefine, coach, nameAndRole };
}
