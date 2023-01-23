import React, { useState, useEffect } from 'react'
import { getFirestore, doc, getDocs, collection, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthProvider, useAuth } from '../context/AuthContext'

export default function GetMyPlayers() {
    const { userInfo, currentUser } = useAuth()
    const [players, setPlayers] = useState([])
    const [isPlayers, setIsPlayers] = useState(null)

    useEffect(() => {
        async function getMyPlayers() {
            try {
                const docRef = doc(db, 'myPlayers', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setPlayers(docSnap.data().archers)
                    setIsPlayers(true)
                } else {
                    console.log('nie ma')
                    setIsPlayers(false)
                }

            } catch (err) {
                console.log(err)
            }
        }
        getMyPlayers()
    }, []);

    return { players, isPlayers }
}
