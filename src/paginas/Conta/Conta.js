import React from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/Legenda";
import Campo from "../../componentes/Campo/Campo";
import "./Conta.css";

function Conta(){
    return (
        <main className="conta">
            <h1>Criar conta</h1>
            <p>Envie o formulário para criar uma conta!</p>
            <Legenda htmlFor="nome">Nome:</Legenda>
            <Campo type="text" id="nome" placeholder="Nome" required/>
           
            <Legenda htmlFor="telefone">Telefone:</Legenda>
            <Campo type="tel" id="telefone" placeholder="Telefone" required/>
           
            <Legenda htmlFor="email">Email:</Legenda>
            <Campo type="email" id="email" placeholder="Email" required
            />

            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo type="password" id="senha" placeholder="Senha" required/>
           
           
            
            <Botao>Enviar</Botao>
            <Link url="/login">Fazer login</Link>
        </main>
    );
};

export default Conta;