import React from 'react'
import NavCoach from '../nav/NavCoach'
import Image from 'next/image'
import { useRouter } from 'next/router';


export default function CoachDashBoard() {
    const router = useRouter()

    function changeToMyPlayers(e) {
        e.preventDefault();
        router.push('/myPlayers')
    }
    function changeToMsg(e) {
        e.preventDefault();
        router.push('/msg')
    }
    function changeToAddPlayer(e) {
        e.preventDefault();
        router.push('/addArcher')
    }

    return (
        <>
            <NavCoach></NavCoach>
            <div className='container d-flex flex-column justify-content-center align-items-center mt-2'>
                <h3>Witamy w AppForArcher!!!</h3>
                <div className='container d-flex flex-column flex-sm-row justify-content-center align-items-center'>
                    <Image src="/archerTarget.avif" alt="vector archer" height={300} width={300} className='rounded-5' />
                    <div className='m-2'>
                        <button type="submit" onClick={changeToMyPlayers} className="btn btn-primary btn-block mb-3 mt-3 w-100">Moi zawodnicy</button>
                        <button type="submit" onClick={changeToAddPlayer} className="btn btn-primary btn-block mb-3 mt-3 w-100">Dodaj zawodnika</button>
                        <button type="submit" onClick={changeToMsg} className="btn btn-primary btn-block mb-3 mt-3 w-100">wiadomości</button>
                    </div>
                </div>
            </div>
        </>
    )
}
