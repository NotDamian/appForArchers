import React, { Component } from 'react'
import mainPageStyle from '../../styles/mainPageStyle.module.css'

export default function MainPageSectionOne() {

    return (
        <section className="section container mt-5 p-4 d-flex flex-column justify-content-around mx-20 mobile" id="section1">
            {/* <!-- dla trenerow --> */}
            <div className="container text-center d-flex flex-column justify-content-around">
                <h2 className={mainPageStyle.highlight}>Dla trenerów</h2>
                <p>Jako trener wspieraj swoich zawodników oraz monitoruj ich postępy.</p>
            </div>

            <div className='container mt-5 p-4 d-flex flex-row justify-content-around mobile'>
                <div className="d-flex flex-row justify-content-around">
                    <div className="w-45">
                        <h5>Postępy zawodników</h5>
                        <p>Śledź postępy swoich zawodników z każdego miejsca na ziemi na dowolnym urządzeniu z dostępem do
                            internetu.</p>
                    </div>
                    <div className='m-1'></div>
                    <div className="w-45">
                        <h5>Szybka komunikacja</h5>
                        <p>Możliwość informowania swoich podopiecznych o ważnych sprawach, takich jak odwołany trening,
                            zmiana godziny treningu czy godzina wyjazdu na zawody.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
