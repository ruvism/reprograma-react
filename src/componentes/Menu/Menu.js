import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

//<Menu usuario={props.usuario}//

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { aberto: false }
    }

    abreOuFechaMenu = () => {
        this.state.aberto ? this.setState({ aberto: false }) : this.setState({ aberto: true })
    }

    sair = () => {
        this.abreOuFechaMenu ();
        this.props.deslogaUsuario ();
    }

    render() {
        let classesdoBotao = "navbar-menu__botao"
        let classesDasOpcoes = "navbar-menu__opcoes"
        if (this.state.aberto) {
            // navbar-menu__botao navbar-menu__botao--aberto//
            classesdoBotao += " navbar-menu__botao--aberto"
            classesDasOpcoes += " navbar-menu__opcoes--aberto"
        }
        return (
            <nav className="navbar-menu">
                <button className={classesdoBotao} onClick={this.abreOuFechaMenu}> Menu </button>
                <ul className={classesDasOpcoes}>
                    <li>
                        <NavLink to="/quem-somos" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>Quem somos</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contato" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>Contato</NavLink>
                    </li>

                    {this.props.usuario ? (
                        <li>
                            <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.sair}>Sair</NavLink>
                        </li>
                        ) : (
                            <li>
                                <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>Login</NavLink>
                            </li>
                        )
                    }

                </ul>
            </nav>
        )
    }
}

export default Menu;