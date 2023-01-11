import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import NavArcher from '../nav/NavArcher'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { AuthProvider, useAuth } from '../../context/AuthContext'


export default function UserEquipment() {
    const [viewfinderOne, setViewfinderOne] = useState(0)
    const [viewfinderTwo, setViewfinderTwo] = useState(0)
    const [viewfinderThree, setViewfinderThree] = useState(0)
    const [viewfindeFour, setViewfindeFour] = useState(0)
    const [viewfinderFive, setViewfinderFive] = useState(0)
    const [viewfinderSix, setViewfinderSix] = useState(0)
    const [viewfinderSeven, setViewfinderSeven] = useState(0)
    const [maidan, setMaidan] = useState('')
    const [arms, setArms] = useState('')
    const [arrow, setArrow] = useState(0)
    const [editViewfinder, setEditViewfinder] = useState(null)
    const [editBow, setEditBow] = useState(null)
    const [editArrow, setEditArrow] = useState(null)

    const { currentUser } = useAuth()


    async function createData() {
        console.log('brak danych')
        const userRef = doc(db, 'equipment', currentUser.uid)
        await setDoc(userRef, {
            'equipment': {
                'viewfinder': {
                    '18': viewfinderOne,
                    '30': viewfinderTwo,
                    '40': viewfinderThree,
                    '50': viewfindeFour,
                    '60': viewfinderFive,
                    '70': viewfinderSix,
                    '90': viewfinderSeven,
                },
                'bow': {
                    'maidan': maidan,
                    'arms': arms,
                },
                'arrow': arrow,

            }
        }, { merge: true })
    }

    function setEqu(equipment) {
        setViewfinderOne(equipment.viewfinder['18'])
        setViewfinderTwo(equipment.viewfinder['30'])
        setViewfinderThree(equipment.viewfinder['40'])
        setViewfindeFour(equipment.viewfinder['50'])
        setViewfinderFive(equipment.viewfinder['60'])
        setViewfinderSix(equipment.viewfinder['70'])
        setViewfinderSeven(equipment.viewfinder['90'])
        setMaidan(equipment.bow.maidan)
        setArms(equipment.bow.arms)
        setArrow(equipment.arrow)
    }

    function editFirsrSection() {
        console.log('it work')
        setEditViewfinder(true);
    }
    function closeEditFirstSetion() {
        setEditViewfinder(false);
    }
    function editSecondSection() {
        console.log('it work')
        setEditBow(true);
    }
    function closeEditSecondSetion() {
        setEditBow(false);
    }
    function editThirdSection() {
        console.log('it work')
        setEditArrow(true);
    }
    function closeEditThirdSetion() {
        setEditArrow(false);
    }
    function updateEqu() {
        createData()
        setEditViewfinder(false);
        setEditBow(false);
        setEditArrow(false);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const docRef = doc(db, 'equipment', currentUser.uid)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    setEqu(docSnap.data().equipment)
                } else {
                    await createData()
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, []);



    return (
        <>
            <NavArcher></NavArcher>
            <div className='container d-flex flex-column justify-content-center align-items-start w-100 mt-2'>
                <div className='border border-dark w-100'>
                    <div className='viewfinder  d-flex flex-column m-1 p-1'>
                        <div className='d-flex flex-row justify-content-around'>
                            <h4>Celownik:</h4>
                            {editViewfinder ? <div><i onClick={updateEqu} className="fa-solid fa-check fs-4 mr-1"></i><i onClick={closeEditFirstSetion} className="fa-solid fa-xmark fs-4 ml-3"></i></div> : <i onClick={editFirsrSection} className="fa-solid fa-pen ms-4 d-flex"></i>}
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-around'>
                            <p>18m: {editViewfinder ? <input type='number' value={viewfinderOne} onChange={(e) => setViewfinderOne(e.target.value)}></input> : viewfinderOne} </p>
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-around'>
                            <p>30m: {editViewfinder ? <input type='number' value={viewfinderTwo} onChange={(e) => setViewfinderTwo(e.target.value)}></input> : viewfinderTwo} </p>
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-around'>
                            <p>40m: {editViewfinder ? <input type='number' value={viewfinderThree} onChange={(e) => setViewfinderThree(e.target.value)}></input> : viewfinderThree} </p>
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-around'>
                            <p>50m: {editViewfinder ? <input type='number' value={viewfindeFour} onChange={(e) => setViewfindeFour(e.target.value)}></input> : viewfindeFour} </p>
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-around'>
                            <p>60m: {editViewfinder ? <input type='number' value={viewfinderFive} onChange={(e) => setViewfinderFive(e.target.value)}></input> : viewfinderFive} </p>
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-around'>
                            <p>70m: {editViewfinder ? <input type='number' value={viewfinderSix} onChange={(e) => setViewfinderSix(e.target.value)}></input> : viewfinderSix} </p>
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-around'>
                            <p>90m: {editViewfinder ? <input type='number' value={viewfinderSeven} onChange={(e) => setViewfinderSeven(e.target.value)}></input> : viewfinderSeven} </p>
                        </div>

                    </div>
                    <div className='border-bottom border-dark'></div>
                    <div className='bow m-1 p-1'>
                        <div className='d-flex flex-row justify-content-around'>
                            <h4>Łuk:</h4>
                            {editBow ? <div><i onClick={updateEqu} className="fa-solid fa-check fs-4 mr-1"></i><i onClick={closeEditSecondSetion} className="fa-solid fa-xmark fs-4 ml-3"></i></div> : <i onClick={editSecondSection} className="fa-solid fa-pen ms-4"></i>}
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-around'>
                            <p>Majdan: {editBow ? <input type='text' value={maidan} onChange={(e) => setMaidan(e.target.value)}></input> : maidan} </p>
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-around'>
                            <p>Ramiona: {editBow ? <input type='text' value={arms} onChange={(e) => setArms(e.target.value)}></input> : arms} </p>

                        </div>
                    </div>
                    <div className='border-bottom border-dark'></div>
                    <div className='arrow m-1 p-1'>
                        <div className='d-flex flex-row justify-content-around'>
                            <h4>Strzały:</h4>
                            {editArrow ? <div><i onClick={updateEqu} className="fa-solid fa-check fs-4 mr-1"></i><i onClick={closeEditThirdSetion} className="fa-solid fa-xmark fs-4 ml-3"></i></div> : <i onClick={editThirdSection} className="fa-solid fa-pen ms-4"></i>}
                        </div>
                        <div className='d-flex flex-row w-100 justify-content-around'>
                            <p>Długość: {editArrow ? <input type='number' value={arrow} onChange={(e) => setArrow(e.target.value)}></input> : arrow} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
