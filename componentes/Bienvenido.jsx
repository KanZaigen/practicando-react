import React from "react"

class Bienvenido extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            nombre: "San miguel",
            apellido: "de las rosas"
        }
    }
    render() {
        return (
            <div> 
                Hola { this.state.nombre + " " + this.state.apellido }
            </div>
        )
    }
}

export default Bienvenido