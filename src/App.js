import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { history } from './helpers/history';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/header/Header';
import Container from './components/container/Container';


import { PrivateRoute } from './PrivateRoute';
import BuscarConsultora from './components/buscar-consultora/BuscarConsultora';
import Indicadores from './components/indicadores/Indicadores';
import VentaNeta from './components/venta-neta/VentaNeta';
import LoginPage from './components/LoginPage/LoginPage';
import TranslateReact from './components/translate/TranslateReact';

import config from 'react-global-configuration';
import configuration from './config';

if (localStorage.getItem("urlService") != "" && localStorage.getItem("urlService") != null) {
  config.set(JSON.parse(localStorage.getItem("urlService")), { freeze: false });
}
else{
  config.set(configuration, { freeze: false });
}

class App extends React.Component {
  constructor(props) {
    super(props);

  }

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
              <Route path="/translates" component={TranslateReact} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}


export default App;
