import React, { useState } from 'react'
import { useRouter } from 'next/router';


let i = 1;

export default function DodajWynik() {

    const [isEnd, setIsEnd] = useState(false);
    const [nrSeri, setNrSeri] = useState(1)
    const [nrOdleglosci, setNrOdleglosci] = useState('Pierwsza');
    const router = useRouter();

    function saveWynik() {
        console.log('zapisane');
    }

    function nextBtnFn(e) {
        e.preventDefault();
        i++;
        setNrSeri(i);
        console.log(i);


        if (i == 7) {
            if (i == 7 && nrOdleglosci === "Druga") {
                console.log('koniec')
                saveWynik();
                router.push('/dashboard');
            }
            console.log('asdadadad')
            i = 1
            setNrSeri(i);
            setNrOdleglosci("Druga")
        }
    }


    return (
        <div className='container d-flex flex-column w-100'>

            <h3>{nrOdleglosci} odległość</h3>
            <div className='border'></div>

            <div className='odlegloscPierwsza'>
                <label className='form-label mt-2'>Seria {nrSeri}</label>
                <div className='d-flex flex-column'>
                    <div className='d-flex flex-row'>
                        <input type="number" className="form-control w-25" aria-describedby="emailHelp" placeholder="0-10" />
                        <input type="number" className="form-control w-25" aria-describedby="emailHelp" placeholder="0-10" />
                        <input type="number" className="form-control w-25" aria-describedby="emailHelp" placeholder="0-10" />
                    </div>
                    <div className='d-flex flex-row'>
                        <input type="number" className="form-control w-25" aria-describedby="emailHelp" placeholder="0-10" />
                        <input type="number" className="form-control w-25" aria-describedby="emailHelp" placeholder="0-10" />
                        <input type="number" className="form-control w-25" aria-describedby="emailHelp" placeholder="0-10" />
                    </div>

                </div>

                <button type="submit" onClick={nextBtnFn} className="btn btn-primary btn-block mb-3 mt-3 w-75">{!isEnd ? 'Nastepna seria' : 'Koniec'}</button>
            </div>
        </div>
    )

}