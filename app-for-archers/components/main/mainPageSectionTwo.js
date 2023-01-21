import React, { Component } from 'react'
import mainPageStyle from '../../styles/mainPageStyle.module.css'
import Script from 'next/script'

export default function mainPageSectionTwo() {

    return (
        <>
            <section className="section container mt-5 p-4 d-flex flex-column justify-content-around " id="section2">
                {/* <!-- dla zawodnikiow --> */}
                <div className="container text-center d-flex flex-column justify-content-around">
                    <h2 className={mainPageStyle.highlight}>Dla zawodników</h2>
                    <p>Jako zawodnik śledź swój dziennik łuczniczy i swoje wyniki.</p>
                </div>

                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div className="d-block text-center p-5">
                                <h5>Dzienik łuczniczy</h5>
                                <p>Śledź swoje postępy tak jak na klasycznym dzienniku tylko że w wersji elektronicznej. Dzięki
                                    temu masz go zawsze przy sobie.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div className="d-block text-center p-4">
                                <h5>Zapisuj ustawienia swojego sprzętu</h5>
                                <p>Możliwość zapisania ustawień celownika, strzałek, twardości ramion i wiele wiecej.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-block text-center p-4">
                                <h5>Dodawaj warunki i samopoczucie do swoich treningów.</h5>
                                <p>Na dobry trening składa sie wiele czyników My pomożemy Ci jak nalepiej monitorować swój trening, damy Ci możliwość zapisywania przy treningach warunków pogodowych, samopoczucia itp.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Poprzedni</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Następny</span>
                    </button>
                </div>


            </section>
        </>
    )
}
