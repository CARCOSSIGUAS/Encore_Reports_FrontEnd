import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import GridConsultora from '../../components/buscar-consultora/GridConsultora';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


import './BuscarConsultora.css';



class BuscarConsultora extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filtro: {
                CodConsultoraLogged: 1697,
                CodConsultoraSearched: 789994,
                NombreConsultora: '',
                Period: 201803,
                NumeroPagina: 1,
                NumeroRegistros: 15,
                TituloPago: '',
                TituloCarrera: '',
                Estado: '',
                DataCadastro:'',
                VentaPersonal: '',
                Nivel:'',
                Generation:'',
                VOT: '',
                VOQ: '',
                LeftBower: 112920,
                RigthBower:342133
            },

            items: []

        };
        this.onBuscar = this.onBuscar.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onBuscar() {
        let params = "CodConsultoraLogged=" + this.state.filtro.CodConsultoraLogged +
            "&CodConsultoraSearched=" + this.state.filtro.CodConsultoraSearched +
            "&NombreConsultora=" + this.state.filtro.NombreConsultora +
            "&DireccionConsultora=" + this.state.filtro.DireccionConsultora +
            "&Period=" + this.state.filtro.Period+
            "&NumeroPagina=" + this.state.filtro.NumeroPagina+
            "&NumeroRegistros=" + this.state.filtro.NumeroRegistros+
            "&TituloPago=" + this.state.filtro.TituloPago+
            "&TituloCarrera=" + this.state.filtro.TituloCarrera+
            "&Estado=" + this.state.filtro.Estado+
            "&DataCadastro=" + this.state.filtro.DataCadastro+
            "&VentaPersonal=" + this.state.filtro.VentaPersonal+
            "&Nivel=" + this.state.filtro.Nivel+
            "&Generation=" + this.state.filtro.Generation+
            "&VOT=" + this.state.filtro.VOT+
            "&VOQ=" + this.state.filtro.VOQ+
            "&LeftBower=" + this.state.filtro.LeftBower+
            "&RigthBower=" + this.state.filtro.RigthBower;

        fetch('http://10.12.9.83:3391/api/report/GetAccountsFilterPaginated/?' + params, {

        })
            .then((response) => {
                return response.json()
            })
            .then((items) => {
                this.setState({ items });
            });
    }


    render() {

        return (
            <div class="container">
                <div class="breadcrumb-detalle breadcrumb-volver-indicadores">
                    <div class="text-md text-primary upper ">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="padding-left10">
                                        <small><i class="icon-angle-left"></i></small><a href="/" class="upper breadCrumb-font">VOLVER A INDICADORES</a>
                                    </td>
                                    <td className="padding-left-border">
                                        <div class="hidden-xs">
                                            <span class="upper breadCrumb-font">
                                                <span class="upper breadCrumb-font">
                                                    GERENTE ZONA 3123 - PERÚ
                                        </span>
                                            </span>
                                        </div>
                                        <div class="visible-xs">
                                            <span class="Rol_Mobile">
                                                <span class="upper Rol_Mobile">
                                                    GERENTE ZONA
                                        </span>
                                            </span><br />
                                            <span class="Zona_Mobile">
                                                <span class="upper Zona_Mobile">
                                                    3123 - PERÚ
                                        </span>
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="content-main">
                    <div className="row">
                        <div class="bc-backtitle">
                            <p class="bc-title">BUSCAR CONSULTORA</p>
                        </div>
                        <div className="col-sm-12">
                            <div class="bc-content-body">
                                <div class="col-md-3 mt-10">
                                    <span class="bc-title-text">Código consultora</span><br />
                                    <input type="text" id="bc-codigo" value={this.state.CodConsultora} onChange={this.handleInputChange} class="inpBusqueda clearable" />
                                </div>
                                <div class="col-md-3 mt-10">
                                    <span class="bc-title-text">Documento de identidad</span><br />
                                    <input type="text" id="bc-documento" class="inpBusqueda" />
                                </div>
                                <div class="col-md-3 mt-10">
                                    <span class="bc-title-text">Nombre consultora</span><br />
                                    <input type="text" id="bc-nombre" class="inpBusquedaC" value={this.state.NombreConsultora} onChange={this.handleInputChange} />
                                </div>
                                <div class="col-md-3 mt-10">
                                    <span class="bc-title-text">Dirección</span><br />
                                    <input type="text" id="bc-direccion" class="inpBusquedaC" value={this.state.DireccionConsultora} onChange={this.handleInputChange} />
                                </div>

                                <p class="bc-filters"><a id="lnk-filtros" href="#Filters" data-toggle="collapse"><span class="text-filtros">OCULTAR FILTROS</span></a><i class="icon-menu-down"></i></p>
                                <div id="Filters" class="collapse in">
                                    <div class="row">
                                        <div class="col-md-3">
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
                                        <div class="col-md-8">
                                            <span class="bc-title-text">Estado</span><br />
                                            <div class="estadoButton">
                                                <a id="01" class="btnEstado line-height2">Registrada</a>
                                                <a id="02" class="btnEstado line-height2">Ingreso / Nueva</a>
                                                <a id="03" class="btnEstado line-height2">Constante / Normal</a>
                                                <a id="04" class="btnEstado line-height1">Posible Egreso / Egresante</a>
                                                <a id="05" class="btnEstado line-height2">Egreso / Egresada</a>
                                                <a id="06" class="btnEstado line-height2">Reingreso</a>
                                                <a id="07" class="btnEstado line-height2">Retirada</a>
                                                <a id="08" class="btnEstado line-height2">Reactivada</a>
                                                <a id="99" class="btnEstado line-height2">Todas las Activas</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 mt-20">
                                            <span class="bc-title-text">Saldo</span><br />
                                            <div class="saldoButton">
                                                <a id="0" title="Con deuda" class="btnSaldo">Con deuda</a>
                                                <a id="1" title="Sin deuda" class="btnSaldo">Sin deuda</a>
                                            </div>
                                        </div>
                                        <div class="col-md-8 mt-20">
                                            <span class="bc-title-text">Segmento</span><br />
                                            <div class="segmentoButton">
                                                <a id="0 " title="Sin Segmento" class="btnSegmento line-height2">Sin Segmento</a>
                                                <a id="1 " title="Nuevas" class="btnSegmento line-height2">Nuevas</a>
                                                <a id="2 " title="Brilla - Empresaria Brillante" class="btnSegmento line-height1">Brilla - Empresaria Brillante</a>
                                                <a id="3 " title="Top - Empresaria de Belleza" class="btnSegmento line-height1">Top - Empresaria de Belleza</a>
                                                <a id="4 " title="C1 - Experta de Belleza" class="btnSegmento line-height1">C1 - Experta de Belleza</a>
                                                <a id="5 " title="C2 - Especialista de Belleza" class="btnSegmento line-height1">C2 - Especialista de Belleza</a>
                                                <a id="6 " title="C3 - Asesora de Belleza" class="btnSegmento line-height1">C3 - Asesora de Belleza</a>
                                                <a id="7 " title="Inconstantes" class="btnSegmento line-height2">Inconstantes</a>
                                                <a id="8 " title="Posible Egreso" class="btnSegmento line-height2">Posible Egreso</a>
                                                <a id="9 " title="Reingreso" class="btnSegmento line-height2">Reingreso</a>
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
                                <div className="row margin-bottom20">
                                    <div class="col-sm-4">
                                        <button type="button" class="btnBusqueda clearable buttonBuscar" onClick={this.onBuscar}><i class="icon-search" ></i>&nbsp;BUSCAR</button><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="margin-top10"></div>
                    <div className="row">
                        <div id="div-contenido-buscar-consultora">
                            <GridConsultora data={this.state.items} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuscarConsultora;
