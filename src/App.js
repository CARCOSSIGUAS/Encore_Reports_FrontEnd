import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { history } from './helpers/history';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/header/Header';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';

import { PrivateRoute } from './PrivateRoute';
import BuscarConsultora from './components/buscar-consultora/BuscarConsultora';
import Indicadores from './components/indicadores/Indicadores';
import VentaNeta from './components/venta-neta/VentaNeta';
import LoginPage from './components/LoginPage/LoginPage';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  // Corregir indentacion
  // Tener cuidado con las mayusculas en la URL de "Login"

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />

            <Switch>
              <Route path="/Login" component={LoginPage} />

              <PrivateRoute exact path="/" component={Indicadores} />
              <PrivateRoute path="/buscarConsultora" component={BuscarConsultora} />
              <PrivateRoute path="/ventaneta" component={VentaNeta} />

            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
