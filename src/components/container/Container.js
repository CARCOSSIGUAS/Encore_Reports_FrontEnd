import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import ConsultorHeader from '../../components/header/ConsultorHeader';

import Indicadores from '../../components/indicadores/Indicadores';
import VentaNeta from '../../components/venta-neta/VentaNeta';

import './Container.css';

class Container extends Component {
    render() {
        return (
            <section>
                <ConsultorHeader />
                <div className="container">
                    <div className="content-main">
                        <span className="icon-content-main"><i className="icon-dash-circled"></i></span>
                        <div className="row">
                        </div >
                    </div >
                </div>

            </section>
        );
    }
}
export default Container;

