import React, { useState, useEffect } from 'react'
// import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { getFirestore, doc, getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthProvider, useAuth } from '../context/AuthContext'
import firebase from '../firebase'

export default function getAllArcher() {
    const [allArcher, setAllArcher] = useState([])
    const [isresult, setIsResult] = useState(null)
    const tmp = []

    useEffect(() => {
        async function getArcher() {
            try {
                const docRef = collection(db, 'IsCoach')
                const docSnap = await getDocs(docRef)
                docSnap.forEach(doc => {
                    tmp.push([doc.id, doc.data()])
                })
                const half = Math.ceil(tmp.length / 2);
                setAllArcher(tmp.slice(0, half))
            } catch (err) {
                console.log(err)
            }
        }
        getArcher()
    }, []);

    return { allArcher }
}
