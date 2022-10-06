import React from "react"
import { useState, useEffect } from "react"

const Effect = () => {
    const [contador, setContador] = useState(0)
    const [click, setClick] = useState(false)
 
    useEffect( () => {
        document.title = "Contador " + contador 
    })

    const handleClick = () => {
        setClick(true)
    }



    return (
        <div>
            <h1>El contador es: { contador } </h1>
            <button
                onClick={ () => setContador(contador + 1) }
                onClick={handleClick}   
            >
                Aumentar
            </button>
            {click ? <h2>Hizo Click</h2> : undefined}
        </div>
    )
}

export { Effect }