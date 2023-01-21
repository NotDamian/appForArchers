import React, { useState } from 'react'
import getMyPlayers from '../../hooks/getMyPlayers'
import { doc, getDoc, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../../firebase'
import { AuthProvider, useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/router';
import GeneralResultCard from '../GeneralResultCard'
import Modal from './Modal'

export default function PlayersCard(props) {
    const [del, setDel] = useState(null)
    const [result, setResult] = useState({})
    const [isresult, setIsResult] = useState(null)
    const { children, i } = props
    const { players, isPlayers } = getMyPlayers()
    const { currentUser } = useAuth()

    const router = useRouter()
    let tmp = players

    async function deleteFromMyPplayer(e) {
        e.preventDefault()
        console.log('usun')
        delete tmp[children.userUid]
        const userRef = doc(db, 'myPlayers', currentUser.uid)
        await setDoc(userRef, {
            'archers': {
                [children.userUid]: deleteField()
            }
        }, { merge: true })

        const playerRef = doc(db, 'IsCoach', children.userUid)
        await setDoc(playerRef, {
            'IsCoach': {
                'coachUid': deleteField()
            }
        }, { merge: true })

        router.push('/myPlayers')
        setDel(true)
    }



    return (
        <>
            {!del ?
                <div key={i} className='border border-dark rounded-3 p-2 m-1 d-flex flex-row justify-content-around align-items-center w-100 '>
                    <div className='w-75'>
                        <p>Imię:  {children.name}</p>
                        {/* <p>Imie:  {children.userUid}</p> */}
                    </div>

                    {/* Modal  */}
                    <Modal>{children}</Modal>

                    {/* trash icon  */}
                    <div className='m-2'>
                        <i onClick={deleteFromMyPplayer} className="fa-solid fa-trash"></i>
                    </div>
                </div>
                : <></>}
        </>
    )
}
