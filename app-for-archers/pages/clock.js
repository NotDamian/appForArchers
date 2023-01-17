import React, { useState, useEffect } from 'react'
import IsCoach from '../hooks/IsCoach'
import NavArcher from '../components/nav/NavArcher'
import NavCoach from '../components/nav/NavCoach'
import { AuthProvider, useAuth } from '../context/AuthContext'
import Login from './login'
import Script from 'next/script'
import MainClock from '../components/MainClock'

export default function clock() {
    const [start, setStart] = useState(null)
    const [counter, setCounter] = useState(180)
    const [end, setEnd] = useState(null)

    const { isDefine, coach, nameAndRole } = IsCoach()
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


    return (
        <>
            {currentUser && coach ? <NavCoach></NavCoach> : <NavArcher></NavArcher>}
            <div className='container d-flex flex-column justify-content-center align-items-center mb-1'>
                <div className="container d-flex justify-content-center align-items-center mt-3">
                    {start ? <MainClock /> : <></>}
                </div>
                {start ?
                    <button type="submit" onClick={stopBtn} className="btn btn-primary btn-block mb-3 mt-3 w-100">Stop</button> :
                    <button type="submit" onClick={startBtn} className="btn btn-primary btn-block mb-3 mt-3 w-100">Start</button>}
            </div>
            {!currentUser && <Login />}
        </>
    )
}
