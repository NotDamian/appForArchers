import React, { useState } from 'react'
import Link from 'next/link'
import Header from './Header'

import { useRouter } from 'next/router'
import { AuthProvider, useAuth } from '../context/AuthContext'


export default function RegisterComponents() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [error, setError] = useState(null);
    const [isLoginIn, setIsLoginIn] = useState(true);
    const router = useRouter();
    const { login, signup, currentUser } = useAuth()


    console.log(currentUser)

    async function onSubmit(e) {
        e.preventDefault()
        alert('guzik działa');
        if (!email || !password) {
            setError('brak meila i hasla')
            return
        }
        if (email && password === passwordTwo) {
            await signup(email, password)

        } else {
            setError('zle dane')
        }

    }

    function checkIsLogIn() {
        if (currentUser) {
            router.push('/dashboard');
        }
    }
    checkIsLogIn();

    return (
        <div>
            <Header></Header>
            <form onSubmit={onSubmit} className='w-100 d-flex justify-content-center '>
                <div className='d-flex flex-column justify-content-center align-items-center w-100'>
                    <h2>Zarejestruj sie</h2>

                    {/* <!-- error alert --> */}
                    {error && <div className='bg-danger m-2 p-5 w-75 text-center text-white'>{error}</div>}

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

                    {/* <!-- button --> */}
                    <button type="submit" className="btn btn-primary btn-block mb-3 mt-3 w-75">Zarejestruj się</button>
                    <p className='small'><Link className="nav-link text-decoration-underline" href="/">Wróc na strone główną</Link> lub <Link className="nav-link text-decoration-underline" href="/login">Zaloguj się</Link></p>

                </div>
            </form>
        </div>
    )
}
