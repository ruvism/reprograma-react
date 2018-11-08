import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import './index.css';
import Home from "./paginas/Home/Home";
import Login from "./paginas/Login/Login";
import Conta from "./paginas/Conta/Conta";
import QuemSomos from "./paginas/Quem Somos/QuemSomos";
import Contato from "./paginas/Contato/Contato";
import NaoEncontrada from "./paginas/NaoEncontrada/NaoEncontrada";
import Navbar from "./componentes/Navbar/Navbar";

function App() {

    return (
        <div className="app">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/conta" component={Conta} />
                <Route path="/login" component={Login} />
                <Route path="/quem-somos" component={QuemSomos} />
                <Route path="/contato" component={Contato} />
                <Route component={NaoEncontrada} /> 
            </Switch>
        </div>
    )
}

ReactDOM.render(
    // O provider não pode ser retirado, nem a store, pois como os filhos do App utilizam a store, não pode ser apagado do pai//
    <Provider store={store}> 
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>,
    document.querySelector("#projeto")
)