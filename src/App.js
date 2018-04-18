import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';
import BuscarConsultora from './components/buscar-consultora/BuscarConsultora';
import Indicadores from './components/indicadores/Indicadores';
import VentaNeta from './components/venta-neta/VentaNeta';

import { LoginPage } from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          
          <Route path="/Login" component={LoginPage} />

          <Route exact path="/" component={Indicadores} />
          <Route path="/buscarConsultora" component={BuscarConsultora} />
          <Route path="/ventaneta" component={VentaNeta} />
        </Switch>
        <Footer />
      </div>

    );
  }
}

export default App;
