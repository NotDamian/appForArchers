import React, { useState } from 'react'
import Link from 'next/link'
import Header from './Header'

import { useRouter } from 'next/router'
import { AuthProvider, useAuth } from '../context/AuthContext'


export default function RegisterComponents() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState(null);
    const [isLoginIn, setIsLoginIn] = useState(true);
    const router = useRouter();
    const { login, signup, currentUser } = useAuth()


    console.log(currentUser)

    async function onSubmit(e) {
        e.preventDefault()
        alert('guzik działa');
        if (!email || !password) {
            setError('Please enter email and password')
            return
        }

        await signup(email, password)
    }

    return (
        <div>
            <Header></Header>
            <div className='w-100 d-flex justify-content-center '>
                <div className='d-flex flex-column justify-content-center align-items-center w-100'>
                    <h2>Zarejestruj sie</h2>

                    {/* <!-- error alert --> */}
                    {error && <div className='bg-danger m-2 p-5 w-75 text-center text-white'>{error}</div>}

                    {/* <!-- userName --> */}
                    <div className="form-group ">
                        <label htmlFor="exampleUserName1" className="form-label mt-4">Nazwa urzytkownika</label>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" placeholder="Nazwa" />
                    </div>
                    {/* <!-- email --> */}
                    <div className="form-group ">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email@example.com" />
                    </div>
                    {/* <!-- password --> */}
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="form-label mt-4">Hasło</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Hasło" />
                    </div>
                    {/* <!-- repeat password --> */}
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword2" className="form-label mt-4">Powtórz hasło</label>
                        <input type="password" value={passwordTwo} onChange={(e) => setPasswordTwo(e.target.value)} className="form-control" placeholder="Hasło" />
                    </div>

                    {/* <!-- choose who y a --> */}
                    <div className="form-group">
                        <legend className="mt-4">Jesteś: </legend>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value='archer' name="optionsRadios" id="optionsRadios1"
                                checked={role === 'archer'} onChange={(e) => setRole(e.target.value)} />
                            <label className="form-check-label" htmlFor="optionsRadios1">Zawodnik</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value='coach' checked={role === 'coach'} onChange={(e) => setRole(e.target.value)} name="optionsRadios" id="optionsRadios2" />
                            <label className="form-check-label" htmlFor="optionsRadios2">Trener</label>
                        </div>
                    </div>

                    {/* <!-- button --> */}
                    <button type="submit" onClick={submitHandler} onSubmit={onSubmit} className="btn btn-primary btn-block mb-3 mt-3 w-75">Zarejestruj się</button>
                    <p className='small'><Link className="nav-link text-decoration-underline" href="/">Wróc na strone główną</Link> lub <Link className="nav-link text-decoration-underline" href="/login">Zaloguj się</Link></p>

                </div>
            </div>
        </div>
    )
}
