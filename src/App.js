import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Indicadores from './components/indicadores/Indicadores';
import VentaNeta from './components/venta-neta/VentaNeta';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Indicadores} />
        <Route path="/indicadores" component={Indicadores} />
        <Route path="/ventaneta" component={VentaNeta} />
      </Switch>
    );
  }
}

export default App;
