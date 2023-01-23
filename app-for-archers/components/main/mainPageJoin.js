import React, { Component } from 'react'
import mainPageStyle from '../../styles/mainPageStyle.module.css'
import Link from 'next/link'

export default function MainPageJoin() {

    return (
        <section className="section container mt-5 p-4 d-flex flex-column justify-content-around mx-20 h-75 d-inline-block">
            {/* <!-- sekcja z poelceniem zalozenia konta --> */}
            <div className="container  text-center d-flex flex-column justify-content-around">
                <h3 className={mainPageStyle.highlight}>Dołącz do nas już dziś!!!</h3>
                <div className='' >
                    <button type="button" className="btn btn-success m-5" ><Link href="/register" className='LinkStyle'>Załóż darmowe konto juz dziś</Link></button>
                </div>
            </div>
        </section>
    )
}
