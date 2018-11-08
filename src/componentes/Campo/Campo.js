import React, { Component } from "react";
import "./Campo.css";

/*<input name ="email" type="email" id="email" placeholder="Email">

const props = {
    name: "email"
    type: "email"
    id: "email",
    placeholder: "Email"
}*/


class Campo extends Component {
    constructor(props) {
        super(props)
        this.valor = ''
        this.state = { modificado: false, erro: '' }
    }

    getValor() {
        return this.valor;
    }

    temErro() {
        if (!this.state.modificado || this.state.erro) { //modificado e erro são definidos no constructor
            return true
        } else {
            return false
        }
        // esta é uma forma diferente para escrever este if abaixo (vale somente para if/else simples)
        // if(this.state.erro){
        //     return true
        // } else {
        //     return false
        // }
    }

    valida = (evento) => {  // o this vai se referenciar ao campo
        const input = evento.target
        const { value, type } = input
        this.valor = value

        const { required, minLength } = this.props
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let mensagem = ''


        if (required && value.trim() === '') { // email obrigatorio
            mensagem = 'Campo obrigatório'
        } else if (minLength && value.length < minLength) {
            mensagem = `Digite pelo menos ${minLength} caracteres`
        } else if (type === 'email' && !regex.test(value)) {
            mensagem = 'Valor inválido'
        }

        this.setState({ modificado: true, erro: mensagem }, this.props.onChange) // para que a funcao só seja chamada depois de aparecer a mensagem de erro

        //ESSA VALIDAÇÃO ESTAVA SENDO USADA PARA OS CAMPOS DA PÁGINA CONTA 
        //const alvo = evento.target
        // if (this.props.obrigatorio && alvo.value === ''){
        //     const state ={
        //         erro: 'Campo obrigatório'
        //     }
        //     this.setState(state)
        // }

    }

    render() { //atualiza o html na tela
        return (
            <div>
                <input
                    id={this.props.id}
                    className="caixa-texto"
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.valida}
                    onBlur={this.valida}
                />
                <p className="grupo__erro">{this.state.erro}</p>
            </div>
        )


    }
}




export default Campo;