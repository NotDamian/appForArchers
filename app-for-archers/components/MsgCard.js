import React from 'react'

export default function MsgCard(props) {
    const { children } = props

    return (
        <div className='border border-dark rounded-3 p-2 m-1 d-flex flex-column justify-content-around align-items-center w-100'>
            <div className='d-flex flex-row justify-content-between w-100'>
                <p>{children.time}</p>
                <p> </p>
                <p>{children.data}</p>
            </div>
            <div>
                <p>{children.msg}</p>
            </div>
        </div>
    )
}
