import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { deslogaUsuario } from "../../redux/actions";
import "./Navbar.css";
import logo from "./logo.png";
import Menu from "../Menu/Menu";

//<Navbar usuario={usuario}>//

function Navbar(props) {
    return (
        <header className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="logo" />
            </Link>
            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
        </header>
    )
}

export default withRouter(
    connect(
        (state) => ({ usuario: state.usuario }),
        { deslogaUsuario }
    )(Navbar)
); //atualiza o componente sem a rota mudar. é necessário usar toda vez que o componente usa navlink//
