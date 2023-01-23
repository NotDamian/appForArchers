import React, { useState } from 'react'
import Header from './Header'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginComponents() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Error, setError] = useState(null);
    const router = useRouter();

    const { login, signup, currentUser } = useAuth()

    async function onSubmit(e) {
        e.preventDefault();
        if (!Email || !Password) {
            setError('Please enter email and password')
            return
        }
        await login(Email, Password)
    }

    function checkIsLogIn() {
        if (currentUser) {
            router.push('/dashboard');
        }
    }
    checkIsLogIn();

    return (
        <>
            <Header></Header>
            <div className='w-100 d-flex justify-content-center mt-5'>
                <form className='h-100'>
                    <fieldset className='d-flex flex-column justify-content-center align-items-center w-100'>
                        <h2>Zaloguj się</h2>

                        {/* <!-- error alert --> */}
                        {Error && <div className='bg-danger m-2 p-5 w-75 text-center text-white'>{Error}</div>}

                        {/* <!-- email --> */}
                        <div className="form-group ">
                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                            <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="email@example.com" />
                        </div>
                        {/* <!-- password --> */}
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1" className="form-label mt-4">Hasło</label>
                            <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Hasło" />
                        </div>

                        {/* <!-- button --> */}
                        <button onClick={onSubmit} type="submit" className="btn btn-primary btn-block mb-3 mt-3 w-75">Zaloguj się</button>
                        <p className='small'><Link className="nav-link text-decoration-underline" href="/">Wróc na stronę główną</Link> lub <Link className="nav-link text-decoration-underline" href="/register">Zarejestuj się</Link></p>

                    </fieldset>
                </form>
            </div>
        </>
    )
}

