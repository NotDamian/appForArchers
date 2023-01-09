import React from 'react'
import Header from '../components/Header'
import LoginComponent from '../components/loginComponents'
import { AuthProvider, useAuth } from '../context/AuthContext'

export default function login() {
    return (
        <>
            <LoginComponent></LoginComponent>
        </>
    )
}
