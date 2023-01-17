import React, { useState } from 'react'
import IsCoach from '../hooks/IsCoach'
import MoreDetail from './MoreDetail'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function GeneralResultCard(props) {
    const [more, setMore] = useState(null)
    const [coachComment, setCoachComment] = useState('')
    const [addCoachCommentBtn, setAddCoachCommentBtn] = useState(null)
    const { children, i } = props

    const { isDefine, coach, nameAndRole, uidCoach } = IsCoach()

    // console.log(children)

    async function save(e) {
        const userRef = doc(db, 'wyniki', children.userUic)
        await setDoc(userRef, {
            [children.title]: {
                'coachComment': coachComment
            }
        }, { merge: true })
        children.coachComment = coachComment
        setCoachComment('')
        setAddCoachCommentBtn(false)
    }

    return (
        <div key={i} className='border border-dark rounded-3 m-3 p-2 bg-light d-flex flex-column justify-content-around'>
            <div className=''>
                <p>Data: {children.time} {children.data}</p>
                <p>Odległość: {children.distance}</p>
                <p>Pierwsza odległość: {children.wynik.all[5]}/360 pkt. </p>
                <p>Druga odległość: {children.wynik.all[11]}/360 pkt.</p>
                <p>Razem: {+children.wynik.all[5] + +children.wynik.all[11]}/720 pkt.</p>
                <p>Komentarz zawodnika: {children.archerComment}</p>
                <p>Komentarz trenera: {children.coachComment}</p>
                {coach ? <div>
                    <button type="submit" onClick={() => setAddCoachCommentBtn(true)} className="btn btn-primary btn-block mb-2 w-50">Dodaj komentarz</button>
                </div> : <></>}
                {addCoachCommentBtn ? <div className='d-flex flex-row justify-content-around align-items-center mb-2'>
                    <textarea value={coachComment} onChange={(e) => setCoachComment(e.target.value)} className="form-control w-75" id="exampleTextarea" rows="2"></textarea>
                    <div>
                        <i onClick={save} className="fa-solid fa-check fs-4 m-1"></i>
                        <i onClick={() => setAddCoachCommentBtn(false)} className="fa-solid fa-xmark fs-4 ml-3"></i>
                    </div>
                </div> : <></>}
            </div>
            {more ? <div className={!more ? 'd-flex' : ''}>
                <i onClick={(e) => setMore(false)} className="fa-solid fa-arrow-up-short-wide m-2"></i>
                <MoreDetail>{children}</MoreDetail>
            </div> : <i onClick={(e) => setMore(true)} className="fa-solid fa-arrow-down-short-wide m-2"></i>}
        </div>
    )
}
