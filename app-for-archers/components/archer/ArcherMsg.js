import React, { useState, useEffect } from 'react'
import NavArcher from '../nav/NavArcher'
import { AuthProvider, useAuth } from '../../context/AuthContext'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import MsgCard from '../MsgCard'

export default function ArcherMsg(props) {
    const [coachMsh, setCoachMsg] = useState([])
    const [haveCoach, setHaveCoach] = useState(null)
    const { userInfo, currentUser } = useAuth()
    const { children } = props



    async function getCoachMsg() {
        try {
            const userRef = doc(db, 'msg', children)
            const docSnapTwo = await getDoc(userRef)
            setCoachMsg(docSnapTwo.data())
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (children.length > 1) {
            setHaveCoach(true)
            getCoachMsg()
        } else {
            setHaveCoach(false)
        }
    }, [])

    return (
        <>
            <NavArcher></NavArcher>
            <div>
                {haveCoach ?
                    <div className='container d-flex flex-column justify-content-center'>
                        <h4>Wiadomości</h4>
                        <div>
                            {Object.values(coachMsh).map((el, i) => {
                                return (
                                    <div key={i}>
                                        <MsgCard >{el}</MsgCard>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    : <div>Brak trenera!</div>}

            </div>
        </>
    )
}
