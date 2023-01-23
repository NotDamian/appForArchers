import React, { useState } from 'react'
import IsCoach from '../hooks/IsCoach'
import NavArcher from './nav/NavArcher'
import NavCoach from './nav/NavCoach'
import { AuthProvider, useAuth } from '../context/AuthContext'

import MainClock from './MainClock'
import { useRouter } from 'next/router'

export default function Clock() {
    const [Start, setStart] = useState(null)
    const [Counter, setCounter] = useState(180)
    // const [end, setEnd] = useState(null)
    const Router = useRouter()

    const { coach } = IsCoach()
    const { currentUser } = useAuth()




    function startBtn(e) {
        e.preventDefault();
        console.log('kkkk')
        setStart(true)
    }

    function stopBtn(e) {
        e.preventDefault();
        setStart(false)
        // setEnd(false)
        setCounter(180)
    }
    ;


    return (
        <>
            {currentUser && coach ? <NavCoach></NavCoach> : <NavArcher></NavArcher>}
            <div className='container d-flex flex-column justify-content-center align-items-center mb-1'>
                {Start ?
                    <button type="submit" onClick={stopBtn} className="btn btn-primary btn-block mb-3 mt-3 w-100">Stop</button> :
                    <button type="submit" onClick={startBtn} className="btn btn-primary btn-block mb-3 mt-3 w-100">Start</button>}
                <div className="container d-flex justify-content-center align-items-center mt-3">
                    {Start ? <MainClock /> : <></>}
                </div>
            </div>

        </>
    )
}
