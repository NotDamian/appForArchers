import React, { useState, useEffect, use } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import { useRouter } from 'next/router'

import { useAuth } from '../context/AuthContext';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'


export default function register() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState(null);
    const [isLoginIn, setIsLoginIn] = useState(true);
    const router = useRouter();

    const [userC, setUserC] = useState(null)

    // const { login, signup, currentUser } = useAuth()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setUserC(user)
            setIsLoginIn(false)
        })
        return unsubscribe
    }, [])

    console.log(userC)
    function onSubmit(e) {
        e.preventDefault();
        alert(email);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Your are registered");
                router.push("/");
            })
            .catch((error) => {
                console.log(error.message);
                setError(
                    "Make password more than 6 characters and format email properly"
                );
                // ..
            });
        // await signup(email, password);
    }

    return (
        <>
            <Header></Header>
            <div className='w-100 d-flex justify-content-center '>
                <form className='d-flex flex-column justify-content-center align-items-center w-100' onSubmit={onSubmit}>
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
                    {/* onClick={submitHandler} */}
                    <button type="submit" className="btn btn-primary btn-block mb-3 mt-3 w-75">Zarejestruj się</button>
                    <p className='small'><Link className="nav-link text-decoration-underline" href="/">Wróc na strone główną</Link> lub <Link className="nav-link text-decoration-underline" href="/login">Zaloguj się</Link></p>

                </form>
            </div>
        </>
    )
}




import React, { useContext, useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

export const AuthContext = React.createContext()



export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        return
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{
            currentUser,
            login,
            signup,
            logout,
        }}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}