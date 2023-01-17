import React, { useState, initialArray, oldArray } from 'react'
import { useRouter } from 'next/router';
import { AuthProvider, useAuth } from '../../context/AuthContext'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import NavArcher from '../nav/NavArcher'
import Table from '../Table';
import { ResultArray } from '../Table';


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
    const [weather, setWeather] = useState('')
    const [wellBeingBefore, setWellBeingBefore] = useState('')
    const [wellBeingAfter, setWellBeingAfter] = useState('')
    const [archerComment, setArcherComment] = useState('')
    const [distance, setDistance] = useState(70)
    const [stageOne, setStageOne] = useState(true)
    const [stageTwo, setStageTwo] = useState(null)
    const [stageThree, setStageThree] = useState(null)
    const [stageFour, setStageFour] = useState(null)

    const [equalOne, setEqualOne] = useState(0)
    const [equalTwo, setEqualTwo] = useState(0)

    const router = useRouter();
    const { userInfo, currentUser } = useAuth()


    const [firstDistance, setFirstDistance] = useState([])
    const [secondDistance, setSecondDistance] = useState([])
    const [oneSeries, setOneSeries] = useState([])
    // let firstDistance = []
    // let secondDistance = []
    // let oneSeries = []
    let tmpp = []
    let tmpArr = []

    async function saveWynik() {
        console.log('zapisane');
        console.log(firstDistance);
        console.log(secondDistance);

        const userRef = doc(db, 'wyniki', currentUser.uid)
        const data = new Date().toJSON()
        const today = new Date()
        await setDoc(userRef, {
            [data]: {
                'title': data,
                'userUic': currentUser.uid,
                "data": today.getHours() + ":" + today.getMinutes(),
                'time': today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
                'wynik': {
                    'all': ResultArray,
                    'first': {
                        6: firstDistance[0],
                        12: firstDistance[1],
                        18: firstDistance[2],
                        24: firstDistance[3],
                        30: firstDistance[4],
                        36: firstDistance[5],
                    },
                    'second': {
                        6: firstDistance[6],
                        12: firstDistance[7],
                        18: firstDistance[8],
                        24: firstDistance[9],
                        30: firstDistance[10],
                        36: firstDistance[11],
                    }
                },
                'weather': weather,
                'wellBeingBefore': wellBeingBefore,
                'wellBeingAfter': wellBeingAfter,
                'archerComment': archerComment,
                'distance': distance
            }
        }, { merge: true })
        router.push('/userresult')
    }

    function nextBtnFn(e) {
        e.preventDefault();
        i++;
        setNrSeri(i);
        console.log(i);
        console.log('przed------------------');
        console.log(firstDistance);
        // console.log(secondDistance);
        tmpp = [I, II, III, IV, V, VI]
        console.log('tmp--------')
        console.log(tmpp)
        setFirstDistance(firstDistance => [...firstDistance, tmpp])
        tmpArr = tmpArr.concat(tmpp)
        console.log('po------------------');
        console.log(firstDistance);
        console.log(tmpArr);


        if (i == 6) {
            setBtnNext("Zakończ odległość")
        }
        if (i == 7) {
            if (i == 7 && nrOdleglosci === "Druga") {
                console.log('koniec')

                // console.log(tmpArr)
                nextBtnFn(e)
                setStageTwo(false)
                setStageThree(true)
            }
            i = 1
            setNrSeri(i);
            setNrOdleglosci("Druga")
            setBtnNext("Następna seria")
        }
    }
    function stageOneNext(e) {
        e.preventDefault()
        console.log(weather)
        console.log(distance)
        console.log(wellBeingAfter)
        setStageOne(false)
        setStageTwo(true)
    }
    function stageThreeNext(e) {
        e.preventDefault()
        tmpp = [I, II, III, IV, V, VI]
        setFirstDistance(firstDistance => [...firstDistance, tmpp])
        setFirstDistance(firstDistance => firstDistance.slice(0, -1))
        setStageThree(false)
        setStageFour(true)

    }

    return (
        <>
            <NavArcher></NavArcher>

            <div className='container d-flex flex-column w-100'>

                {stageOne ? <div>
                    <h5>Pogoda:</h5>
                    <form className='weather w-100 d-flex flex-row justify-content-around'>

                        <div className='d-flex flex-column align-items-center'>
                            <p>Słonecznie</p>
                            <i className="fa-solid fa-sun m-4 mt-0 fs-1"></i>
                            <input className="form-check-input" type="radio" value='Słonecznie' checked={weather === 'Słonecznie'} onChange={(e) => setWeather('Słonecznie')} name="weatherRadio" id="optionsRadios1" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Częściowe zachmurzenie</p>
                            <i className="fa-solid fa-cloud-sun m-4 mt-0 fs-1 center"></i>
                            <input className="form-check-input" type="radio" value='Częściowe zachmurzenie' checked={weather === 'Częściowe zachmurzenie'} onChange={(e) => setWeather('Częściowe zachmurzenie')} name="weatherRadio" id="optionsRadios1" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Pochmurno</p>
                            <i className="fa-solid fa-cloud m-4 mt-0 fs-1"></i>
                            <input className="form-check-input" type="radio" value='Pochmurno' checked={weather === 'Pochmurno'} onChange={(e) => setWeather('Pochmurno')} name="weatherRadio" id="optionsRadios1" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Wietrznie</p>
                            <i className="fa-solid fa-wind m-4 mt-0 fs-1"></i>
                            <input className="form-check-input" type="radio" value='Wietrznie' checked={weather === 'Wietrznie'} onChange={(e) => setWeather('Wietrznie')} name="weatherRadio" id="optionsRadios1" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Deszczowo</p>
                            <i className="fa-solid fa-cloud-rain m-4 mt-0 fs-1"></i>
                            <input className="form-check-input" type="radio" value='Deszczowo' checked={weather === 'Deszczowo'} onChange={(e) => setWeather('Deszczowo')} name="weatherRadio" id="optionsRadios1" />
                        </div>
                    </form>
                    <div className='border-bottom mt-3'></div>
                    <h5>Samopoczucie przed:</h5>
                    <form className='wellBeing w-100 d-flex flex-row justify-content-around'>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Dobrze</p>
                            <i className="fa-solid fa-face-smile m-4 mt-0 fs-1"></i>
                            <input name="wellBeingBefore" className="form-check-input" type="radio" value='Dobrze' checked={wellBeingBefore === 'Dobrze'} onChange={(e) => setWellBeingBefore('Dobrze')} id="optionsRadios2" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Normalnie</p>
                            <i className="fa-solid fa-face-meh m-4 mt-0 fs-1"></i>
                            <input name="wellBeingBefore" className="form-check-input" type="radio" value='Normalnie' checked={wellBeingBefore === 'Normalnie'} onChange={(e) => setWellBeingBefore('Normalnie')} id="optionsRadios2" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Źle</p>
                            <i className="fa-solid fa-face-frown m-4 mt-0 fs-1"></i>
                            <input name="wellBeingBefore" className="form-check-input" type="radio" value='Źle' checked={wellBeingBefore === 'Źle'} onChange={(e) => setWellBeingBefore('Źle')} id="optionsRadios2" />
                        </div>
                    </form>
                    <div className='border-bottom mt-3'></div>
                    <h5>Odległość:</h5>
                    <div className='distance w-100 d-flex flex-row justify-content-around'>
                        <div className="form-group w-75">
                            <select value={distance} onChange={(e) => setDistance(e.target.value)} className="form-select w-100" id="exampleSelect1">
                                <option value="DEFAULT" disabled>Wybierz odległość  ...</option>
                                <option value='70'>70</option>
                                <option value='18'>18</option>
                                <option value='30'>30</option>
                                <option value='40'>40</option>
                                <option value='50'>50</option>
                                <option value='60'>60</option>
                                <option value='90'>90</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" onClick={stageOneNext} className="btn btn-primary btn-block mb-3 mt-3 w-100">Dalej</button>
                </div> : <></>}

                {stageTwo ? <div>
                    <h3>{nrOdleglosci} odległość</h3>
                    <div className='border'></div>
                    <div className='container d-flex justify-content-center align-items-center'>
                        <form className='container d-flex flex-column justify-content-center  w-100'>
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
                            <div><h6>Uzyskane punkty w tej seri: {equalOne}</h6></div>


                            <button type="submit" onClick={nextBtnFn} className="btn btn-primary btn-block mb-3 mt-3 w-100">{btnNext}</button>
                        </form>
                    </div>
                </div> : <></>}

                {stageThree ? <div>
                    <h5>Samopoczucie po:</h5>
                    <form className='wellBeing w-100 d-flex flex-row justify-content-around'>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Dobrze</p>
                            <i className="fa-solid fa-face-smile m-4 mt-0 fs-1"></i>
                            <input name="wellBeingAfter" className="form-check-input" type="radio" value='Dobrze' checked={wellBeingAfter === 'Dobrze'} onChange={(e) => setWellBeingAfter('Dobrze')} id="optionsRadios2" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Normalnie</p>
                            <i className="fa-solid fa-face-meh m-4 mt-0 fs-1"></i>
                            <input name="wellBeingAfter" className="form-check-input" type="radio" value='Normalnie' checked={wellBeingAfter === 'Normalnie'} onChange={(e) => setWellBeingAfter('Normalnie')} id="optionsRadios2" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <p>Źle</p>
                            <i className="fa-solid fa-face-frown m-4 mt-0 fs-1"></i>
                            <input name="wellBeingAfter" className="form-check-input" type="radio" value='Źle' checked={wellBeingAfter === 'Źle'} onChange={(e) => setWellBeingAfter('Źle')} id="optionsRadios2" />
                        </div>
                    </form>
                    <div class="form-group">
                        <label for="exampleTextarea" class="form-label mt-4">Dodaj komentarz</label>
                        <textarea onChange={(e) => setArcherComment(e.target.value)} className="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    <button type="submit" onClick={stageThreeNext} className="btn btn-primary btn-block mb-3 mt-3 w-100">Zakończ</button>
                </div> : <></>}

                {stageFour ? <div className=''>
                    <div className='d-flex flex-column justify-content-around w-100'>
                        <div className=''>
                            <h3>Dane:</h3>
                            <p>Pogoda: {weather}</p>
                            <p>Samopoczucie przed: {wellBeingBefore}</p>
                            <p>Samopoczucie po: {wellBeingAfter}</p>
                            <p>Odległośc: {distance}</p>
                            <p>Komentarz: {archerComment}</p>
                        </div>
                        <div className=''>
                            <h3>Wyniki</h3>
                            <Table >{firstDistance}</Table>
                        </div>
                    </div>
                    <button type="submit" onClick={saveWynik} className="btn btn-primary btn-block mb-3 mt-3 w-100">Zapisz</button>
                </div> : <></>}

            </div>
        </>
    )

}