import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import carregando from "./carregando.svg";
import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { carregando: true }
    }

    render() {
        if (!this.props.usuaio) {
            return <Redirect to="/login" />
        }
        return (
            <main className="home">
                {this.state.carregando ? (
                    <img className="home__loading" src={carregando} alt="Carregando" />
                ) : (
                        <div>
                            Nesse espaço listarei os postits amanhã
                    </div>
                    )}
            </main>
        )
    }
}

// const state ={
//     usuario: {"email: email@email.com"}
// }

export default connect(
    (state) => ({ usuaio: state.usuario })
)(Home);