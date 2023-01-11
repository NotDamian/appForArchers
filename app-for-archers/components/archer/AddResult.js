import React, { useState, initialArray, oldArray } from 'react'
import { useRouter } from 'next/router';
import { AuthProvider, useAuth } from '../../context/AuthContext'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import NavArcher from '../nav/NavArcher'


let i = 1;
let j = 1;
const fullScore = 1;

export default function AddResult() {

    const [btnNext, setBtnNext] = useState("Następna seria");
    const [nrSeri, setNrSeri] = useState(1)
    const [nrOdleglosci, setNrOdleglosci] = useState('Pierwsza');
    const [I, setI] = useState(0)
    const [II, setII] = useState(0)
    const [III, setIII] = useState(0)
    const [IV, setIV] = useState(0)
    const [V, setV] = useState(0)
    const [VI, setVI] = useState(0)
    const router = useRouter();
    const { userInfo, currentUser } = useAuth()


    const [firstDistance, setFirstDistance] = useState([])
    const [secondDistance, setSecondDistance] = useState([])
    const [oneSeries, setOneSeries] = useState([])
    // let firstDistance = []
    // let secondDistance = []
    // let oneSeries = []
    // let tmpp = []

    async function saveWynik() {
        console.log('zapisane');
        console.log(firstDistance);
        console.log(secondDistance);

        // const userRef = doc(db, 'wyniki', currentUser.uid)
        // const data = new Date().toJSON()
        // await setDoc(userRef, {
        //     [data]: fullScore
        // }, { merge: true })

    }

    function nextBtnFn(e) {
        e.preventDefault();
        if (i === 1) {
            setFirstDistance(firstDistance => firstDistance.concat(oneSeries))
        }

        i++;
        console.log('------------------');
        console.log(firstDistance);
        console.log(secondDistance);
        setOneSeries([I, II, III, IV, V, VI])
        if (nrOdleglosci == "Druga") {
            setSecondDistance(secondDistance => secondDistance.concat(oneSeries))
        } else {
            setFirstDistance(firstDistance => firstDistance.concat(oneSeries))
        }

        setNrSeri(i);
        console.log(i);

        if (i == 6) {
            setBtnNext("Zakończ odległość")
        }
        if (i == 7) {
            if (i == 7 && nrOdleglosci === "Druga") {
                setOneSeries([I, II, III, IV, V, VI])
                setSecondDistance(secondDistance => secondDistance.concat(oneSeries))
                setOneSeries([I, II, III, IV, V, VI])
                setSecondDistance(secondDistance => secondDistance.concat(oneSeries))
                console.log('koniec')
                saveWynik();
            }
            i = 1
            setSecondDistance(secondDistance => secondDistance.concat(oneSeries))
            setNrSeri(i);
            setNrOdleglosci("Druga")
            setBtnNext("Następna seria")
        }
    }


    return (
        <>
            <NavArcher></NavArcher>

            <div className='container d-flex flex-column w-100'>

                <h3>{nrOdleglosci} odległość</h3>
                <div className='border'></div>

                <form className='container d-flex flex-column justify-content-center align-items-center w-100'>
                    <label className='form-label mt-2'>Seria {nrSeri}</label>
                    <div className='w-100'>
                        <div className='d-flex flex-row m-auto'>
                            <input type="number" className="form-control w-25" value={I} onChange={(e) => setI(e.target.value)} placeholder="0-10" min='1' max='10' />
                            <input type="number" className="form-control w-25" value={II} onChange={(e) => setII(e.target.value)} placeholder="0-10" min='1' max='10' />
                            <input type="number" className="form-control w-25" value={III} onChange={(e) => setIII(e.target.value)} placeholder="0-10" min='1' max='10' />
                        </div>
                        <div className='d-flex flex-row'>
                            <input type="number" className="form-control w-25" value={IV} onChange={(e) => setIV(e.target.value)} placeholder="0-10" min='1' max='10' />
                            <input type="number" className="form-control w-25" value={V} onChange={(e) => setV(e.target.value)} placeholder="0-10" min='1' max='10' />
                            <input type="number" className="form-control w-25" value={VI} onChange={(e) => setVI(e.target.value)} placeholder="0-10" min='1' max='10' />
                        </div>

                    </div>

                    <button type="submit" onClick={nextBtnFn} className="btn btn-primary btn-block mb-3 mt-3 w-75">{btnNext}</button>
                </form>
            </div>
        </>
    )

}