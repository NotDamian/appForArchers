import Image from 'next/image';
import React, { useState } from 'react';
import NavArcher from '../nav/NavArcher';
import { useRouter } from 'next/router';


export default function UserDashBoard() {
    const [addWynik, setAddWynik] = useState(null);
    const router = useRouter()

    function changeToWynki(e) {
        e.preventDefault();
        router.push('/userresult')
    }
    function changeToMsg(e) {
        e.preventDefault();
        router.push('/msg')
    }
    function changeToEqu(e) {
        e.preventDefault();
        router.push('/equipment')
    }

    return (
        <>
            <NavArcher></NavArcher>
            <div className='container d-flex flex-column  justify-content-center align-items-center mt-2'>
                <h3>Witamy w AppForArcher!!!</h3>
                <div className='container d-flex flex-column flex-sm-row justify-content-center align-items-center'>
                    <Image src="/archerTarget.avif" alt="vector archer" height={300} width={300} className='rounded-5' />
                    <div className='m-2'>
                        <button type="submit" onClick={changeToWynki} className="btn btn-primary btn-block mb-3 mt-3 w-100">Wyniki</button>
                        <button type="submit" onClick={changeToMsg} className="btn btn-primary btn-block mb-3 mt-3 w-100">Wiadomości</button>
                        <button type="submit" onClick={changeToEqu} className="btn btn-primary btn-block mb-3 mt-3 w-100">Mój sprzęt</button>
                    </div>
                </div>
            </div>
        </>
    )
}
