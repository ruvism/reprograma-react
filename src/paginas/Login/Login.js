import React, { Component } from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/Legenda";
import Campo from "../../componentes/Campo/Campo";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { desabilitado: true }
    }

    handleChange = (evento) => {


    }

    render() {
        return (
            <main className="login">
                <h1>Login</h1>
                <p>Entre com seu e-mail e senha.</p>
                <Legenda htmlFor="email">Email:</Legenda>
                <Campo type="email" id="email" placeholder="Email" required onChange={this.handleChange} />

                <Legenda htmlFor="senha">Senha:</Legenda>
                <Campo type="password" id="senha" placeholder="Senha" required minLength={6} onChange={this.handleChange} />

                <Botao>Enviar</Botao>
                <Link url="/conta">Criar uma conta</Link>
            </main>
        )
    }
}

export default Login;