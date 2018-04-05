import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class Header extends React.Component {
    render() {
        return (
            <header>
                <nav class="navbar navbar-inverse upper tour-menu-navegacion altoSeccionMenu" role="navigation">
                    <div class="container" >
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle toogle-menu" data-toggle="collapse" data-target=".navigation-primary">
                                <span class="sr-only">Toggle navigation</span>
                                <span>  <i class="icon-menu-belcorp"></i> <small>Menú</small></span>
                            </button>
                            <div class="navbar-logo visible-xs text-center">
                                <a href="/"><img src={require("../../images/logo-belcorp.png")} alt="Belcorp" width="45" class="hidden" /> <img src={require("../../images/logo-belcorp.svg")} alt="Belcorp" width="55" height="42" /></a>
                            </div>

                            <div class="opcion_notificaciones_movil visible-xs">

                                <ul>
                                    <li>
                                        <a href="#" title="Notificaciones">
                                            <span class="icono_notificaciones">
                                                <span class="notificaciones_cantidad" data-cantidad="movil" >13</span>
                                                <img src="/images/icono-notificaciones.png" alt="Notificaciones" />
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" title="Notificaciones Grupo">
                                            <span class="icono_notificacionesGrupo">
                                                <span class="notificaciones_cantidad_grupo" data-cantidad="movil" >43</span>
                                                <img src={require("../../images/icono-notificaciones-grupo.png")} alt="Notificaciones Grupo" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                            <a href="/" class="navbar-brand hidden-xs"><img src={require("../../images/logo-belcorp.png")} alt="Belcorp" width="40" class="hidden" /> <img src={require("../../images/logo-belcorp.svg")} alt="Belcorp" width="55" height="42" /></a>
                        </div>
                        <div class="collapse navbar-collapse navigation-primary contenedorOpcionesNotificaciones">
                            <ul class="nav navbar-nav">
                                <li class="hidden-sm active">
                                    <Link to={`/`} >
                                        <a class="_pointer" href="/" role="menu" region="Principal" parent="Inicio" title="Inicio" id="lnk-prin-inicio">Inicio</a>
                                    </Link>
                                </li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle _pointer" data-toggle="dropdown" role="menu" region="Principal" parent="Reportes" title="Reportes" id="lnk-prin-reportes">Reportes <FontAwesomeIcon icon="angle-down" className="icono_flechaDesglegarMenu" /></a>
                                    <ul class="dropdown-menu multi-level tnormal">
                                        <li>
                                            <a class="_pointer" href="/HomeNew/Index/DataReport" role="menu" region="Principal" parent="Reportes" title="Reportes de Cierre" id="lnk-prin-reportes-de-cierre">Reportes de Cierre</a>
                                        </li>
                                        <li>
                                            <a class="_pointer" href="/Reportes/Pedidos" role="menu" region="Principal" parent="Reportes" title="Bolsa de Pedidos" id="lnk-prin-bolsa-de-pedidos">Bolsa de Pedidos</a>
                                        </li>
                                        <li>
                                            <a class="_pointer" href="/Reportes/PedidoWeb" role="menu" region="Principal" parent="Reportes" title="Pedido Web" id="lnk-prin-pedido-web">Pedido Web</a>
                                        </li>
                                        <li>
                                            <a class="_pointer" href="/Reportes/Cobranzas" role="menu" region="Principal" parent="Reportes" title="Cobranzas" id="lnk-prin-cobranzas">Cobranzas</a>
                                        </li>
                                        <li>
                                            <a class="_pointer" href="/Reportes/Flexipago" role="menu" region="Principal" parent="Reportes" title="Flexipago" id="lnk-prin-flexipago">Flexipago</a>
                                        </li>
                                        <li>
                                            <a class="_pointer" href="/Reportes/ReporteZonificacion" role="menu" region="Principal" parent="Reportes" title="Reporte Rezonificación" id="lnk-prin-reporte-rezonificación">Reporte Rezonificación</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="close-session visible-xs">
                                    <a role="menu" region="Principal" parent="Cerrar Sesión" title="Cerrar Sesión" id="lnk-prin-cerrar-sesion" href="/HomeNew/CerrarSesion">
                                        <span class="hidden-md hidden-sm">Cerrar Sesión</span>
                                        <FontAwesomeIcon icon={["fab", "sign-in-alt"]} />
                                    </a>
                                </li>
                                <li class="hidden-sm">
                                    <Link to={`/buscarConsultora`} >
                                        <a class="_pointer" href="/" role="menu" region="Principal" parent="Inicio" title="Inicio" id="lnk-prin-inicio">Buscar Consultora</a>
                                    </Link>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right hidden-xs">
                                <li >
                                    <a role="menu" region="Principal" parent="Notificaciones" title="Notificaciones" id="lnk-prin-notificaciones" class="opcion_notificaciones" href="#" >
                                        <span class="icono_notificaciones">
                                            <span class="notificaciones_cantidad" data-cantidad="web">13</span>
                                            <img src={require("../../images/icono-notificaciones.png")} alt="Notificaciones" />
                                        </span>
                                    </a>
                                </li>
                                <li >
                                    <a role="menu" region="Principal" parent="Notificaciones Grupo" title="Notificaciones Grupo" id="lnk-prin-notificaciones-grupo" class="opcion_notificaciones" href="#" >
                                        <span class="icono_notificacionesGrupo">
                                            <span class="notificaciones_cantidad_grupo" data-cantidad="web" >43</span>
                                            <img src={require("../../images/icono-notificaciones-grupo.png")} alt="Notificaciones Grupo" />
                                        </span>
                                    </a>

                                </li>
                                <li>
                                    <a class="link-close-session enlace_cerrarSesion" role="menu" region="Principal" parent="Cerrar Sesión" title="Cerrar Sesión" id="lnk-prin-cerrar-sesion" href="/HomeNew/CerrarSesion">
                                        <i role="menu" region="Principal" parent="Cerrar Sesión" title="Cerrar Sesión" class="icon-logout icono_cerrar_sesion"></i>
                                        <span class="text-close-session hidden-sm">Cerrar<br />Sesión</span>
                                    </a>
                                </li>
                            </ul>
                            <span class="close-menu visible-xs toogle-menu">
                                <a data-toggle="collapse" data-target=".navigation-primary"><i class="icon-aspa" ></i></a>
                            </span>
                        </div>

                    </div>
                </nav>
            </header>
        );
    }
}


export default Header;