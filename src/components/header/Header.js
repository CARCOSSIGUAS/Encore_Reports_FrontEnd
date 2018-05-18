import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeSelected: "",
            activeReporte: 'hidden-reporte'
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onMostrarReporte = this.onMostrarReporte.bind(this);
    }

    onMostrarReporte (){
        this.setState({
            activeReporte: 'active-reporte'
        })
    }

    onCloseReporte(){
        this.setState({
            activeReporte: 'hidden-reporte'
        })
    }
    handleInputChange(event) {
        
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
                            <a class="navbar-brand" href="/">
                                <img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="45" className="hidden" /> 
                                <img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="55" height="42" />
                            </a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className={this.state.activeSelected == "item1" ? "active" : ""} id="item1" onClick={this.handleInputChange}>
                                    <Link to={`/`} className="_pointer" title="Inicio" id="lnk-prin-inicio">
                                        Inicio
                                    </Link>
                                </li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle _pointer" data-toggle="dropdown" role="menu" region="Principal" parent="Reportes" title="Relatórios" id="lnk-prin-reportes">Relatórios <FontAwesomeIcon icon="angle-down" className="icono_flechaDesglegarMenu" onClick={this.onMostrarReporte} onFocusOut={this.onCloseReporte} /></a>
                                    <ul className={"dropdown-menu multi-level tnormal "+this.state.activeReporte} >
                                        <li>
                                            <a className="_pointer"  role="menu" region="Principal" parent="Reportes" title="Reportes de Cierre" id="lnk-prin-reportes-de-cierre">Reporte de Desempeño</a>
                                        </li>
                                        <li>
                                            <a className="_pointer"  role="menu" region="Principal" parent="Reportes" title="Bolsa de Pedidos" id="lnk-prin-bolsa-de-pedidos">Reporte de Ganancia</a>
                                        </li>
                                        <li>
                                            <a className="_pointer"  role="menu" region="Principal" parent="Reportes" title="Pedido Web" id="lnk-prin-pedido-web">Reporte de Nuevas</a>
                                        </li>
                                    </ul>
                                </li>
                                <li  className={this.state.activeSelected == "item2" ? "active" : ""} id="item2" onClick={this.handleInputChange}>
                                    <Link to={`/buscarConsultora`} >
                                        Pesquisar Consultor
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a role="menu" region="Principal" parent="Deslogar" title="Deslogar" id="lnk-prin-cerrar-sesion" href="/Login">
                                        Deslogar
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