import React, { useState } from 'react'
import DodajWynik from './AddResult'
import Link from 'next/link'
import NavArcher from '../nav/NavArcher'

export default function WynikCard() {
    const [addNew, setAddNew] = useState(null)
    return (
        <>
            <NavArcher></NavArcher>
            <div className='section container mt-5 p-4 d-flex flex-row justify-content-around mx-20'>
                <Link className="nav-link active" href="/useraddresult">Dodaj nowy wynik</Link>
                <div>Wyniki</div>
            </div>
        </>
    )
}
