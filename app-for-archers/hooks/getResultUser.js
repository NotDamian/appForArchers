import React, { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthProvider, useAuth } from '../context/AuthContext'

export default function GetResultuser() {
    const [result, setResult] = useState({})
    const [isresult, setIsResult] = useState(null)


    const { currentUser } = useAuth()
    useEffect(() => {
        async function getResult() {
            try {
                const docRef = doc(db, 'wyniki', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setResult(docSnap.data())
                    setIsResult(true)
                } else {
                    setIsResult(false)
                }
            } catch (err) {
                console.log(err)
            }
        }
        getResult()
    }, []);

    return { result, isresult }
}
