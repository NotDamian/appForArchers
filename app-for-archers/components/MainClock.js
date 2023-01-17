import React, { useState, useEffect } from 'react'

export default function MainClock() {
    const [start, setStart] = useState(null)
    const [counter, setCounter] = useState(180)



    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div>
            <h1>{counter} sekund</h1>
        </div>
    )
}
