import React from 'react'
import NavCoach from '../nav/NavCoach'
import getArcher from '../../hooks/GetAllArcher'
import AddArcherCard from './AddArcherCard'


export default function CoachAddArcher() {

    const { allArcher } = getArcher()


    return (
        <>
            <NavCoach></NavCoach>
            <div className='container d-flex flex-row justify-content-center'>
                <h2>Dodaj zawodników</h2>
            </div>
            <div className='container d-flex flex-column justify-content-center '>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    {allArcher.map((el, i) => {
                        return (
                            <AddArcherCard key={i}>{el}</AddArcherCard>
                        )
                    })}
                </div>
            </div>

        </>
    )
}
