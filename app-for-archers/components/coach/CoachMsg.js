import React, { useState, useEffect } from 'react'
import NavCoach from '../nav/NavCoach'
import MsgCard from '../MsgCard'
import { AuthProvider, useAuth } from '../../context/AuthContext'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

export default function CoachMsg() {
    const [coachMsh, setCoachMsg] = useState('')
    const [coachOldMsh, setCoachOldMsg] = useState([])

    const { userInfo, currentUser } = useAuth()


    async function getOldMsg() {
        const userRef = doc(db, 'msg', currentUser.uid)
        const docSnap = await getDoc(userRef)
        if (docSnap.exists()) {
            setCoachOldMsg(docSnap.data())
            // console.log(docSnap.data())
        } else {
            console.log('nie ma')
        }
    }



    async function sendMsg(e) {
        e.preventDefault();
        console.log('wyslane')
        const userRef = doc(db, 'msg', currentUser.uid)
        const data = new Date().toJSON()
        const today = new Date()
        await setDoc(userRef, {
            [today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()]: {
                "data": today.getHours() + ":" + today.getMinutes(),
                'time': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                'msg': coachMsh
            }
        }, { merge: true })
        setCoachMsg('')
        getOldMsg()
    }

    useEffect(() => {
        getOldMsg()
    }, [])

    return (
        <>
            <NavCoach></NavCoach>
            <div className='container d-flex flex-column justify-content-center'>
                <div className='container d-flex flex-column justify-content-center'>
                    <h4>Napisz nową wiadomość do zawodników</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleTextarea" className="form-label mt-4">Twoja wiadomość</label>
                            <textarea onChange={(e) => setCoachMsg(e.target.value)} value={coachMsh} className="form-control" id="exampleTextarea" rows="3"></textarea>
                        </div>
                        <button onClick={sendMsg} type="submit" className="btn btn-primary m-2">Wyślij</button>
                    </form>
                </div>
                <div className='container d-flex flex-column justify-content-center'>
                    <h4>Stare wiadomości</h4>
                    <div>
                        {Object.values(coachOldMsh).map((el, i) => {
                            return (
                                <MsgCard key={i}>{el}</MsgCard>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
