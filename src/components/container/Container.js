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
                <div class="container">
                    <div class="content-main">
                        <span class="icon-content-main"><i class="icon-dash-circled"></i></span>
                        <div class="row">
                        </div >
                    </div >
                </div>

            </section>
        );
    }
}
export default Container;

