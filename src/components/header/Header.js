import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeSelected: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        debugger;
        const target = event.target.parentElement;
        const name = target.id;
        this.setState({ activeSelected: name });
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-inverse upper" role="navigation">
                    <div className="container-fluid" >
                        <div className="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand"><img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="45" className="hidden" /> <img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="55" height="42" /></a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className={this.state.activeSelected == "item1" ? "active" : ""} id="item1" onClick={this.handleInputChange}>
                                    <Link to={`/`} className="_pointer" title="Inicio" id="lnk-prin-inicio">
                                        Inicio
                                    </Link>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle _pointer" data-toggle="dropdown" role="menu" region="Principal" parent="Reportes" title="Reportes" id="lnk-prin-reportes">Reportes <FontAwesomeIcon icon="angle-down" className="icono_flechaDesglegarMenu" /></a>
                                    <ul className="dropdown-menu multi-level tnormal">
                                        <li>
                                            <a className="_pointer" href="/HomeNew/Index/DataReport" role="menu" region="Principal" parent="Reportes" title="Reportes de Cierre" id="lnk-prin-reportes-de-cierre">Reportes de Cierre</a>
                                        </li>
                                        <li>
                                            <a className="_pointer" href="/Reportes/Pedidos" role="menu" region="Principal" parent="Reportes" title="Bolsa de Pedidos" id="lnk-prin-bolsa-de-pedidos">Bolsa de Pedidos</a>
                                        </li>
                                        <li>
                                            <a className="_pointer" href="/Reportes/PedidoWeb" role="menu" region="Principal" parent="Reportes" title="Pedido Web" id="lnk-prin-pedido-web">Pedido Web</a>
                                        </li>
                                        <li>
                                            <a className="_pointer" href="/Reportes/Cobranzas" role="menu" region="Principal" parent="Reportes" title="Cobranzas" id="lnk-prin-cobranzas">Cobranzas</a>
                                        </li>
                                        <li>
                                            <a className="_pointer" href="/Reportes/Flexipago" role="menu" region="Principal" parent="Reportes" title="Flexipago" id="lnk-prin-flexipago">Flexipago</a>
                                        </li>
                                        <li>
                                            <a className="_pointer" href="/Reportes/ReporteZonificacion" role="menu" region="Principal" parent="Reportes" title="Reporte Rezonificación" id="lnk-prin-reporte-rezonificación">Reporte Rezonificación</a>
                                        </li>
                                    </ul>
                                </li>
                                <li  className={this.state.activeSelected == "item2" ? "active" : ""} id="item2" onClick={this.handleInputChange}>
                                    <Link to={`/buscarConsultora`} >
                                        Buscar Consultora
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a role="menu" region="Principal" parent="Cerrar Sesión" title="Cerrar Sesión" id="lnk-prin-cerrar-sesion" href="/Login">
                                        Cerrar Sesión
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header >
        );
    }
}
export default Header;