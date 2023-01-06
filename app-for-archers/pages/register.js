import Head from 'next/head'
import { useContext } from 'react'
import RegisterComponent from '../components/RegisterComponents'


export default function register() {
    return (
        <>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>register</h1>
            <RegisterComponent />
        </>
    )
}
