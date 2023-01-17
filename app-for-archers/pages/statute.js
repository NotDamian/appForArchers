import React from 'react'
import Link from 'next/link'

export default function statute() {
    return (
        <>
            <div className='container d-flex flex-column  justify-content-center align-items-center mt-2'>
                <h3>Główne zasady w trakcie zawodów ustalone przez Polski Związek Łucziczy</h3>
                <p>Jeśli chciałbys dowiedzieć sie więcej zapraszamy do zapoznania się z całym regulaminem <Link className=" stretched-link" href="https://archery.pl/dokumenty/regulaminy-sportowe/" target="_blank">
                    REGULAMIN PZŁ</Link></p>
                <div></div>
                <div className='container d-flex flex-column  justify-content-center align-items-center mt-2'>
                    <h5>Czas strzelania:</h5>
                    <p>Czas strzelania serii 6-strzał wynosi 180 sekund.</p>
                    <h5>Kategorie wiekowe:</h5>
                    <ul>
                        <li>Senior: W kategori SENIOR mogą startować zawodnicy urodzeni w roku 2005 lub starsi zgłoszeni przez kluby lub indywidualnie,</li>
                        <li>Młodzieżowiec: zawodnicy rocznika 2000-2002 zgłoszeni przez kluby lub indywidualnie,</li>
                        <li>Junior: zawodnicy rocznika 2003-2005 zgłoszeni przez kluby lub indywidualnie,</li>
                        <li>junior młodszy: zawodnicy rocznika 2006-2008 zgłoszeni przez kluby lub indywidualnie,</li>
                        <li>Młodzik: zawodnicy rocznika 2009-2011 zgłoszeni przez kluby lub indywidualnie.</li>
                    </ul>
                    <h5>Ogległości:</h5>
                    <p>Odległość strzelania zaley od wieku oraz rodzajów zawodów. Odległości, które możemy spotkać to: 18m, 30m, 40m, 50m, 60m, 70m, i 90m.</p>
                </div>

            </div>
        </>
    )
}
