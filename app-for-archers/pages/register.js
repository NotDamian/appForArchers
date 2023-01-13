import Head from 'next/head'
import { useContext } from 'react'
import RegisterComponent from '../components/RegisterComponents'
import { AuthProvider, useAuth } from '../context/AuthContext'


export default function register() {
    return (
        <>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <RegisterComponent />
        </>
    )
}
