import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-inverse upper" role="navigation">
                    <div className="container-fluid" >
                        <div class="navbar-header navbar-header-margin">
                            <a href="/"><img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="45" className="hidden" /> <img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="55" height="42" /></a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li className="hidden-sm active">
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
                            <li className="close-session visible-xs">
                                <a role="menu" region="Principal" parent="Cerrar Sesión" title="Cerrar Sesión" id="lnk-prin-cerrar-sesion" href="/HomeNew/CerrarSesion">
                                    <span className="hidden-md hidden-sm">Cerrar Sesión</span>
                                    <FontAwesomeIcon icon={["fab", "sign-in-alt"]} />
                                </a>
                            </li>
                            <li className="hidden-sm" className="_pointer" title="Inicio" id="lnk-prin-inicio">
                                <Link to={`/buscarConsultora`} >
                                    Buscar Consultora
                                    </Link>
<<<<<<< HEAD
                            </li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="#" title="Notificaciones">
                                    <span className="icono_notificaciones">
                                    </span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </header>
        );
    }
}


export default Header;