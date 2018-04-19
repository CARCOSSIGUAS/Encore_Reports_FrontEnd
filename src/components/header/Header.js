import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-inverse upper tour-menu-navegacion altoSeccionMenu" role="navigation">
                    <div className="container" >
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle toogle-menu" data-toggle="collapse" data-target=".navigation-primary">
                                <span className="sr-only">Toggle navigation</span>
                                <span>  <i className="icon-menu-belcorp"></i> <small>Menú</small></span>
                            </button>
                            <div className="navbar-logo visible-xs text-center">
                                <a href="/"><img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="45" className="hidden" /> <img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="55" height="42" /></a>
                            </div>

                            <div className="opcion_notificaciones_movil visible-xs">

                                <ul>
                                    <li>
                                        <a href="#" title="Notificaciones">
                                            <span className="icono_notificaciones">
                                                <span className="notificaciones_cantidad" data-cantidad="movil" >13</span>
                                                <img src="/images/icono-notificaciones.png" alt="Notificaciones" />
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" title="Notificaciones Grupo">
                                            <span className="icono_notificacionesGrupo">
                                                <span className="notificaciones_cantidad_grupo" data-cantidad="movil" >43</span>
                                                <img src={require("../../images/icono-notificaciones-grupo.png")} alt="Notificaciones Grupo" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <a href="/" className="navbar-brand hidden-xs"><img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="40" className="hidden" /> <img src={require("../../images/lbel-white.svg")} alt="Belcorp" width="55" height="42" /></a>
                        </div>
                        <div className="collapse navbar-collapse navigation-primary contenedorOpcionesNotificaciones">
                            <ul className="nav navbar-nav">
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
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right hidden-xs">
                                <li>
                                    <a className="link-close-session enlace_cerrarSesion" role="menu" region="Principal" parent="Cerrar Sesión" title="Cerrar Sesión" id="lnk-prin-cerrar-sesion" href="/HomeNew/CerrarSesion">
                                        <i role="menu" region="Principal" parent="Cerrar Sesión" title="Cerrar Sesión" className="icon-logout icono_cerrar_sesion"></i>
                                        <span className="text-close-session hidden-sm">Cerrar<br />Sesión</span>
                                    </a>
                                </li>
                            </ul>
                            <span className="close-menu visible-xs toogle-menu">
                                <a data-toggle="collapse" data-target=".navigation-primary"><i className="icon-aspa" ></i></a>
                            </span>
                        </div>

                    </div>
                </nav>
            </header>
        );
    }
}


export default Header;