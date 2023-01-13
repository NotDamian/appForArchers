import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { AuthProvider, useAuth } from '../../context/AuthContext'

export default function AddArcherCard(props) {
    const [user, setUser] = useState(null)
    const [isAdded, setIsAdded] = useState(null)
    const { children, i } = props
    const { currentUser } = useAuth()

    async function isMyPlayer() {
        const userRef = doc(db, 'myPlayers', currentUser.uid)
        const docSnap = await getDoc(userRef)
        if (docSnap.exists()) {
            if (Object.keys(docSnap.data().archers)[0] == children[0]) {
                setIsAdded(true)
            }
        } else {
            console.log('brak zapisanych zawodnikow')
        }

    }
    isMyPlayer()


    async function addArcher(e) {
        e.preventDefault()
        console.log('save')
        const userRef = doc(db, 'myPlayers', currentUser.uid)
        await setDoc(userRef, {
            'archers': {
                [children[0]]: {
                    'name': children[1].IsCoach.name,
                    'tole': children[1].IsCoach.role,
                    'userUid': children[0]
                }
            }
        }, { merge: true })
        isMyPlayer()
    }
    if (children[1].IsCoach.role == 'archer' && !isAdded) {
        return (
            <div key={i} className='border border-dark rounded-3 p-2 m-1 d-flex flex-row justify-content-around align-items-center vw-75 '>
                <div className='alert alert-dismissible alert-primary w-50'>
                    <p className='lh-1'>Imie: {children[1].IsCoach.name}</p>
                    <p className='lh-sm'>Typ konta: {children[1].IsCoach.role}</p>
                    {/* <div>uid: {children[0]}</div> */}
                </div>
                <div className=''>
                    <button onClick={addArcher} type='buttom' className='btn btn-primary'>Dodaj zawodnika</button>
                </div>
            </div>
        )
    } else {
        return (<></>)
    }

    // console.log(user)
}
