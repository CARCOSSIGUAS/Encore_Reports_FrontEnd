import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BuscarConsultora.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class BuscarConsultora extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="col-sm-12">
                <div className="col-sm-12">
                    <div class="bc-backtitle">
                        <p class="bc-title">BUSCAR CONSULTORA</p>
                    </div>
                </div>
                <div class="bc-content-body">
                    <div class="row">
                        <div class="col-md-3 mt-10">
                            <span class="bc-title-text">Código consultora</span><br />
                            <input type="text" id="bc-codigo" maxlength="20" class="inpBusqueda clearable" />
                        </div>
                        <div class="col-md-3 mt-10">
                            <span class="bc-title-text">Documento de identidad</span><br />
                            <input type="text" id="bc-documento" maxlength="20" class="inpBusqueda" />
                        </div>
                        <div class="col-md-4 mt-10">
                            <span class="bc-title-text">Nombre consultora</span><br />
                            <input type="text" id="bc-nombre" maxlength="100" class="inpBusquedaC" />
                        </div>
                        <div class="col-md-4 mt-10">
                            <span class="bc-title-text">Dirección</span><br />
                            <input type="text" id="bc-direccion" maxlength="100" class="inpBusquedaC" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-15">
                            <p class="bc-filters"><a id="lnk-filtros" href="#Filters" data-toggle="collapse"><span class="text-filtros">OCULTAR FILTROS</span></a><i class="icon-menu-down"></i></p>
                            <div id="Filters" class="collapse in">
                                <div class="row">
                                    <div class="col-md-2">
                                        <span class="bc-title-text">Sección</span><br />
                                        <div class="RegionZonaSeccionButton">
                                            <a id="A" class="btnSeccion">A</a>
                                            <a id="B" class="btnSeccion">B</a>
                                            <a id="C" class="btnSeccion">C</a>
                                            <a id="D" class="btnSeccion">D</a>
                                            <a id="E" class="btnSeccion">E</a>
                                            <a id="F" class="btnSeccion">F</a>
                                            <a id="G" class="btnSeccion">G</a>
                                            <a id="H" class="btnSeccion">H</a>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <span class="bc-title-text">Estado</span><br />
                                        <div class="estadoButton">
                                            <a id="01"  class="btnEstado line-height2">Registrada</a>
                                            <a id="02"  class="btnEstado line-height2">Ingreso / Nueva</a>
                                            <a id="03"  class="btnEstado line-height2">Constante / Normal</a>
                                            <a id="04"  class="btnEstado line-height2">Posible Egreso / Egresante</a>
                                            <a id="05"  class="btnEstado line-height2">Egreso / Egresada</a>
                                            <a id="06"  class="btnEstado line-height2">Reingreso</a>
                                            <a id="07"  class="btnEstado line-height2">Retirada</a>
                                            <a id="08"  class="btnEstado line-height2">Reactivada</a>
                                            <a id="99"  class="btnEstado line-height2">Todas las Activas</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 mt-20">
                                        <span class="bc-title-text">Saldo</span><br />
                                        <div class="saldoButton">
                                            <a id="0" title="Con deuda" class="btnSaldo">Con deuda</a>
                                            <a id="1" title="Sin deuda" class="btnSaldo">Sin deuda</a>
                                        </div>
                                    </div>
                                    <div class="col-md-11 mt-20">
                                        <span class="bc-title-text">Segmento</span><br />
                                        <div class="segmentoButton">
                                            <a id="0 "  title="Sin Segmento" class="btnSegmento">Sin Segmento</a>
                                            <a id="1 "  title="Nuevas" class="btnSegmento">Nuevas</a>
                                            <a id="2 "  title="Brilla - Empresaria Brillante" class="btnSegmento">Brilla - Empresaria Brillante</a>
                                            <a id="3 "  title="Top - Empresaria de Belleza" class="btnSegmento">Top - Empresaria de Belleza</a>
                                            <a id="4 "  title="C1 - Experta de Belleza" class="btnSegmento">C1 - Experta de Belleza</a>
                                            <a id="5 "  title="C2 - Especialista de Belleza" class="btnSegmento">C2 - Especialista de Belleza</a>
                                            <a id="6 "  title="C3 - Asesora de Belleza" class="btnSegmento">C3 - Asesora de Belleza</a>
                                            <a id="7 "  title="Inconstantes" class="btnSegmento">Inconstantes</a>
                                            <a id="8 "  title="Posible Egreso" class="btnSegmento">Posible Egreso</a>
                                            <a id="9 "  title="Reingreso" class="btnSegmento">Reingreso</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 mt-20">
                                        <span class="bc-title-text">Pedidos</span><br />
                                        <div class="pedidosButton">
                                            <a id="1" title="Consultoras con pedido" class="btnPedidos">Consultoras con pedido</a>
                                            <a id="0" title="Consultoras sin pedido" class="btnPedidos">Consultoras sin pedido</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-15">
                            <button type="button" class="btnBusqueda clearable buttonBuscar"><i class="icon-search"></i>&nbsp;BUSCAR</button><br />
                        </div>
                    </div>
                    <br />
                    <div id="div-contenido-buscar-consultora"></div>
                </div>
            </div>
        );
    }
}

export default BuscarConsultora;
