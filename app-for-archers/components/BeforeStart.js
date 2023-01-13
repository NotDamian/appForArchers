import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { AuthProvider, useAuth } from '../context/AuthContext'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function BeforeStart() {
    const [role, setRole] = useState(null);
    const [name, setName] = useState('')
    const [error, setError] = useState(null);
    const [isLoginIn, setIsLoginIn] = useState(true);
    const router = useRouter();
    const { userInfo, currentUser } = useAuth()

    async function onSubmit(e) {
        e.preventDefault()
        console.log('guzik działa');
        if (!role || !name) {
            setError('Prosze wybiez jedno z opcji')
            return
        } else {
            if (role == 'coach') {
                setRole(true)
            } else {
                setRole(false)
            }
            const userRef = doc(db, 'IsCoach', currentUser.uid)
            await setDoc(userRef, {
                'IsCoach': {
                    'role': role,
                    'name': name
                }
            }, { merge: true })
            router.push('/dashboard')
        }


    }

    return (
        <div className='w-100 d-flex justify-content-center align-items-center mt-5 pt-5'>
            <form onSubmit={onSubmit} className='w-100 d-flex justify-content-center '>
                <div className='d-flex flex-column justify-content-center align-items-center w-100'>
                    <h2>Zanim zaczniemy, kim jesteś?</h2>

                    {/* <!-- error alert --> */}
                    {error && <div className='bg-danger m-2 p-5 w-75 text-center text-white'>{error}</div>}

                    {/* name */}
                    <div className="form-group ">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Imie i nazwisko" />
                    </div>
                    {/* <!-- choose who y a --> */}
                    <div className="form-group">
                        <legend className="mt-4">Jesteś: </legend>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value='archer' checked={role === 'archer'} onChange={(e) => setRole('archer')} name="optionsRadios" id="optionsRadios1" />
                            <label className="form-check-label" htmlFor="optionsRadios1">Zawodnik</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value='coach' checked={role === 'coach'} onChange={(e) => setRole('coach')} name="optionsRadios" id="optionsRadios2" />
                            <label className="form-check-label" htmlFor="optionsRadios2">Trener</label>
                        </div>
                    </div>

                    {/* <!-- button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-3 mt-3 w-75">Zarejestruj się</button>
                </div>
            </form>
        </div>
    )
}
