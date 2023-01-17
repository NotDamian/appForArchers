import React, { useState } from 'react'
import NavCoach from '../nav/NavCoach'
import { getFirestore, doc, getDocs, collection, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { AuthProvider, useAuth } from '../../context/AuthContext'
import PlayersCard from './PlayersCard'
import getMyPlayers from '../../hooks/getMyPlayers'

export default function CoachMyPlayers() {
    const { userInfo, currentUser } = useAuth()
    // const [players, setPlayers] = useState([])
    // const [isPlayers, setIsPlayers] = useState(null)

    const { players, isPlayers } = getMyPlayers()


    return (
        <>
            <NavCoach></NavCoach>
            <div className='container d-flex flex-row justify-content-center'>
                <h2>Moi zawodnicy</h2>
            </div>
            {isPlayers ? <div className='container d-flex flex-column justify-content-center '>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    {Object.values(players).map((el, i) => {
                        return (
                            <PlayersCard key={i}>{el}</PlayersCard>
                        )
                    })}
                </div>
            </div> : <div>Brak zapisanych zawodników</div>}
        </>
    )
}
