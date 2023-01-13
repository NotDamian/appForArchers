import React, { useState } from 'react'
import MoreDetail from './MoreDetail'

export default function GeneralResultCard(props) {
    const [more, setMore] = useState(null)
    const { children, i } = props
    console.log(children.weather)
    // console.log(props)


    return (
        <div key={i} className='border border-dark rounded-3 m-3 p-2 bg-light d-flex flex-column justify-content-around'>
            <div className=''>
                <p>Data: {children.time} {children.data}</p>
                <p>Odległość: {children.distance}</p>
                <p>Pierwsza odległość: {children.wynik.all[5]}/360 pkt. Druga odległośc: {children.wynik.all[11]}/360 pkt.</p>
                <p>Razem: {+children.wynik.all[5] + +children.wynik.all[11]}/720 pkt.</p>
                <p>Mój komentarz: {children.archerComment}</p>
            </div>
            {more ? <div className={!more ? 'd-flex' : ''}>
                <i onClick={(e) => setMore(false)} class="fa-solid fa-arrow-up-short-wide"></i>
                <MoreDetail>{children}</MoreDetail>
            </div> : <i onClick={(e) => setMore(true)} class="fa-solid fa-arrow-down-short-wide"></i>}
        </div>
    )
}
