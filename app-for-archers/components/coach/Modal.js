import React, { useState } from 'react'
import GeneralResultCard from '../GeneralResultCard'
import { doc, getDoc, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../../firebase'

export default function Modal(props) {
    const { children } = props
    const [result, setResult] = useState({})
    const [isresult, setIsResult] = useState(null)


    function moreInfo(e) {
        e.preventDefault()
        getResult()
        console.log('wiecej info')
        console.log(children.userUid)
    }

    async function getResult() {

        const docRef = doc(db, 'wyniki', children.userUid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setResult(docSnap.data())
            setIsResult(true)
        } else {
            setIsResult(false)
        }

    }


    return (
        <>
            <div>
                <button onClick={moreInfo} type='buttom' className='btn btn-primary' data-bs-toggle="modal" data-bs-target={`#staticBackdrop-${children.userUid}`}>Pokaż wyniki</button>
            </div>

            <div className="modal fade" id={`staticBackdrop-${children.userUid}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{children.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {isresult ?
                                Object.keys(result).map((k, i) => {
                                    return (
                                        <GeneralResultCard key={i}>{result[k]}</GeneralResultCard>
                                    )
                                })
                                : <>Brak wyników</>}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
                            {/* <button type="button" class="btn btn-primary">Understood</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
