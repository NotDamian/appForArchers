import React, { useState, useEffect } from 'react'

export default function MainClock() {
    const [Start, setStart] = useState(null)
    const [Counter, setCounter] = useState(180)



    useEffect(() => {
        const timer =
            Counter > 0 && setInterval(() => setCounter(Counter - 1), 1000);
        return () => clearInterval(timer);
    }, [Counter]);

    return (
        <div>
            <h1>{Counter} sekund</h1>
        </div>
    )
}
