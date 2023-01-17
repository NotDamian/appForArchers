import React, { Component } from 'react'
import mainPageStyle from '../../styles/mainPageStyle.module.css'
import Script from 'next/script'

export default function mainPageSectionTwo() {

    return (
        <>
            <section className="section container mt-5 p-4 d-flex flex-column justify-content-around mx-20" id="section2">
                {/* <!-- dla zawodnikiow --> */}
                <div className="container text-center d-flex flex-column justify-content-around">
                    <h2 className={mainPageStyle.highlight}>Dla zawodników</h2>
                    <p>Jako zawodnik śledź swój dziennik łuczniczy i swoje wyniki.</p>
                </div>

                <div className="slider container mt-4 mb-0 p-4 mobileSlider">
                    <div className="slide slideMobileCenter">
                        <div className="slideContent">
                            <h5 className="slideContentTitle">Dzienik łuczniczy</h5>
                            <blockquote className="slideContentText">
                                Śledź swoje postępy tak jak na klasycznym dzienniku tylko że w wersji elektronicznej. Dzięki
                                temu masz go zawsze przy sobie.
                            </blockquote>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideContent">
                            <h5 className="slideContentTitle">Zapisuj ustawienia swojego sprzętu</h5>
                            <blockquote className="slideContentText">
                                Możliwość zapisania ustawień celownika, strzałek, twardości ramion i wiele wiecej.
                            </blockquote>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slideContent">
                            <h5 className="slideContentTitle">Dodawaj warunki i samopoczucie do swoich treningów.</h5>
                            <blockquote className="slideContentText">
                                Na dobry trening składa sie wiele czyników. My pomożemy Ci jak nalepiej monitorować swój
                                trening, damy Ci możliwość zapisywania przy treningach warunków pogodowych, samopoczucia itp.
                            </blockquote>
                        </div>
                    </div>

                    <button className="sliderBtn sliderBtn--left">&larr;</button>
                    <button className="sliderBtn sliderBtn--right">&rarr;</button>
                    <div className="dots"></div>

                </div>

            </section>
            <Script src="mainPageScript.js" />
        </>
    )
}
