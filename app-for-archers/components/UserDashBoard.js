import React, { useState } from 'react'
import DodajWynik from './DodajWynik'
import Header from './Header'
import NavArcher from './NavArcher'
import WynikCard from './WynikCard'

export default function UserDashBoard() {
    const [addWynik, setAddWynik] = useState(null);


    return (
        <>
            <NavArcher></NavArcher>
            <div className='container d-flex flex-row justify-content-center m-3'>
                {/* <WynikCard></WynikCard> */}
                {!addWynik && <DodajWynik></DodajWynik>}
            </div>
        </>
    )
}
