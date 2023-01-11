import React from 'react'
import Link from 'next/link'
import { useAuth } from '../../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from "../../firebase";

export default function NavCoach() {


    const { currentUser } = useAuth()
    function handleLogOut(e) {
        e.preventDefault();
        signOut(auth)
            .then(() => {
                console.log("you are logged out");
                router.push("/");
            })
            .catch((error) => {
                // An error happened.
            });
    }


    return (
        <div className='bg-primary '>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">AppForArchers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" href="https://archery.pl/">Polski Związek łuczniczy
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="#section2">Zawodnicy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="#section3">Aktualności</Link>
                            </li>
                        </ul>
                        <form onSubmit={handleLogOut} className='d-flex'>
                            <button className="bg-teal-800 w-full m-2 p-2 tracking-wide p-1 focus:outline-none rounded-xl font-bold text-teal-50 text-center btn btn-success">
                                Wyloguj
                            </button>
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )
}
