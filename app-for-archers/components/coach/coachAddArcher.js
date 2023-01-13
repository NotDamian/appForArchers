import React from 'react'
import NavCoach from '../nav/NavCoach'
import getArcher from '../../hooks/getAllArcher'
import AddArcherCard from './AddArcherCard'


export default function coachAddArcher() {

    const { allArcher } = getArcher()


    return (
        <>
            <NavCoach></NavCoach>
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
