import React, { Component } from 'react'
import { AuthProvider } from '../../context/AuthContext'

export default function index() {

    return (
        <AuthProvider>
            <div>index</div>
        </AuthProvider>

    )
}

