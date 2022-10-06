import React, { useState}  from "react"

export default function Welcome (props) {

    const [persona, setPersona] = useState({
        nombre: "Billy",
        apellido: "Kuthulo"
    })

    const getNombreCompeto = () => persona.nombre + " " + persona.apellido

    return (
        <div>
            <h1>Hola { getNombreCompeto } </h1>
        </div>
    )
}