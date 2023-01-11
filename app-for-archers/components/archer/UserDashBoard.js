import React, { useState } from 'react'
import NavArcher from '../nav/NavArcher'


export default function UserDashBoard() {
    const [addWynik, setAddWynik] = useState(null);


    return (
        <>
            <NavArcher></NavArcher>
            <div className='container d-flex flex-row justify-content-center m-3'>
                tu bedzie kalendarz? wyniki?
            </div>
        </>
    )
}
