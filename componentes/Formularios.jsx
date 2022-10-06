import React, { useState } from "react"

export default function Formulario () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nombre, setNombre]= useState("Linjiakun")

    const cambiarEmail = (e) => setEmail(e.target.value)
    const cambiarPassword = (e) => setPassword(e.target.value)

    const enviarDatos = (e) => {
        e.preventDefault()
        console.log(`Email: ${ email }, Password:${ password }`);
    }

    const cambiar_nombre = () => {
        setNombre("Adrian")
    } 

    return (
        <div>
            <form onSubmit={ enviarDatos }>
                <h2>Iniciar Cesion </h2>
                <label>
                    E-mail
                    <input type="email" required value={ email } placeholder="Ingresa tu correo" onChange={cambiarEmail}/>
                </label><br /><br />
                <label>
                    PassWord
                    <input type="password" required value={ password } placeholder="Ingresa tu contraseña" onChange={cambiarPassword}/>
                </label><br />
                <button type="submit">Enviar</button>
                <h2>Hola { nombre } </h2> <br />
                <button onClick={ cambiar_nombre }>Cambiar Nombre</button>
            </form>
        </div>
    ) 
}

