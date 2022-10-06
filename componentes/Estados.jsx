import React from "react"

class Estados extends React.Component {

    constructor(props) {
        super(props)
        console.log("constructor");

        this.state = {
            nombre: "pedro"
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.setState({ nombre:"linjjiakun"})
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        const nombre = this.state.nombre
        return(<div>
            <h2>Estados</h2>
            <h3> { nombre } </h3>
        </div>) 
        
    }
}

export default Estados 


