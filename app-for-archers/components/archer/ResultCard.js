import React, { useState } from 'react'
import DodajWynik from './AddResult'
import Link from 'next/link'
import NavArcher from '../nav/NavArcher'
import { AuthProvider, useAuth } from '../../context/AuthContext'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import getResult from '../../hooks/GetResultUser'
import GeneralResultCard from '../GeneralResultCard'

export default function WynikCard() {
    // const [isResult, setIsReslt] = useState(null)
    const { result, isresult } = getResult()


    return (
        <>
            <NavArcher></NavArcher>

            <div className='container  mt-1 p-2 d-flex flex-column  justify-content-center align-items-center mx-20 '>
                <div className='m-3'>
                    <Link className=" btn btn-success p-2 nav-link active" href="/useraddresult">Dodaj nowy wynik</Link>
                </div>
                {isresult ? (<div className='bg-primary rounded-3 d-flex flex-column justify-content-around w-100'>

                    {Object.keys(result).map((k, i) => {
                        return (
                            <GeneralResultCard key={i}>{result[k]}</GeneralResultCard>
                        )
                    })}

                </div>) : <h3>Brak zapisanych danych</h3>}

            </div>
        </>
    )
}