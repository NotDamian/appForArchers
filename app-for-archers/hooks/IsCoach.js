import React, { useState, useEffect, useRef } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthProvider, useAuth } from '../context/AuthContext'


export default function IsCoach() {
    const [isDefine, setisDefine] = useState(null);
    const [coach, setCoach] = useState(null)
    const { currentUser } = useAuth()

    useEffect(() => {
        async function checkIsCoach() {
            try {
                const docRef = doc(db, 'IsCoach', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setisDefine(true)
                    setCoach(docSnap.data().coach)
                } else {
                    setisDefine(false)
                }
            } catch (err) {
                console.log(err)
            }
        }
        checkIsCoach()
    });

    return { isDefine, coach };
}
