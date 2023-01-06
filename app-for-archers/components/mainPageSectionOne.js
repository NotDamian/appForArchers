import React, { Component } from 'react'
import mainPageStyle from '../styles/mainPageStyle.module.css'

export default function mainPageSectionOne() {

    return (
        <section className="section container mt-5 p-4 d-flex flex-column justify-content-around mx-20 mobile" id="section1">
            {/* <!-- dla trenerow --> */}
            <div className="container text-center d-flex flex-column justify-content-around">
                <h2 className={mainPageStyle.highlight}>Dla trenerów</h2>
                <p>Jako trener wspieraj swoich zawodników oraz monitoruj ich postęp.</p>
            </div>

            <div className='container mt-5 p-4 d-flex flex-row justify-content-around mobile'>
                <div className="d-flex flex-row justify-content-around">
                    <div className="w-45">
                        <h5>Postępy zawodników</h5>
                        <p>Śledź postępy swoich zawodników z kadego miejsca na ziemi na kazdym urządzeniu z dostępem do
                            internetu</p>
                    </div>
                    <div className="w-45">
                        <h5>Szybka komunikacja</h5>
                        <p>Moliwość komunikowania swoich podopiecznych o wanych sprawach. Takich jak odwołany trening,
                            zmiana godziny treningu czy godzina wyjazdu na zowady.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
