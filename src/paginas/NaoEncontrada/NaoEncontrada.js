import React from 'react'
import cat from './cat.jpg'
import './NaoEncontrada.css'

function NaoEncontrada(){
    return(
    <main className="nao-encontrada">
    <h1>Página não encontrada</h1>
    <p className="nao-encontrada_simbolo"></p>
    <img src={cat} alt="Não encontrada"/>
    
    </main>
    )
}

export default NaoEncontrada