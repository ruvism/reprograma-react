import React from "react";
import gatinho from "./gatinho-404.jpg";
import "./NaoEncontrada.css";

function NaoEncontrada () {
    return (
        <main className="nao-encontrada">
        <h1>Página não encontrada :(</h1>
        <img src={gatinho} alt="Gatinho 404"/>
        </main>
    )
}

export default NaoEncontrada;