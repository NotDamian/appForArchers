import React, { Component } from 'react'
import mainPageStyle from '../../styles/mainPageStyle.module.css'

export default function mainPageSectionThree() {

    return (
        <section className="section container mt-5 p-4 d-flex flex-column justify-content-around mx-20" id="section3">
            {/* <!-- Q&A --> */}
            <div className="container  text-center d-flex flex-column">
                <h2 className={mainPageStyle.highlight}>Q&A</h2>
                <p>Najczęściej zadawane pytania</p>
            </div>

            <div className="container mt-5 mb-0 p-4">

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Czy aplikacja jest darmowa?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Tak. Aplikacja jest w pełni darmowa
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Czy aplikacja jest w innych jezykach niz polski?.
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Nie. Aplikacja dostepna jest tylko w jezyku polskim.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Jak zacząć kozystac z aplikacji
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Naley załoyc konto a nastepnie cieszyc sie z koystania z naszej usługi.
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
