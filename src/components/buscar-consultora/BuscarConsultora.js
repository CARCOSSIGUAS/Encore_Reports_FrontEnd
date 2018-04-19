import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import GridConsultora from '../../components/buscar-consultora/GridConsultora';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

import './BuscarConsultora.css';



class BuscarConsultora extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filtro: {
                CodConsultoraLogged: 1697,
                CodConsultoraSearched: 0,
                CodPatrocinador: 0,
                NombrePatrocinador: '',
                NombreConsultora: '',
                Period: 201803,
                NumeroPagina: 1,
                NumeroRegistros: 15,
                TituloPago: '',
                TituloCarrera: '',
                Estado: '',
                DataCadastro: '',
                VentaPersonal: '',
                Nivel: '',
                Generation: '',
                VOT: '',
                VOQ: '',
                LeftBower: 112920,
                RigthBower: 342133,
                Nivel1: false,
                Nivel2: false,
                Nivel3: false,
                Nivel4: false,
                Generacion1: false,
                Generacion2: false,
                Generacion3: false,
            },

            items: []

        };
        this.onBuscar = this.onBuscar.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeActiveButton = this.changeActiveButton.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.state.filtro[name] = value;
        this.setState({
            filtro: this.state.filtro
        });
    }

    changeActiveButton(event) {
        const target = event.target;
        const name = target.name;
        var isActive = false;

        if (target.className.indexOf("active") > -1) {
            target.className = target.className.replace("active", "");
        }
        else {
            target.className += " active";
            isActive = true;
        }

        this.state.filtro[name] = isActive;
        this.setState({
            filtro: this.state.filtro
        });
    }

    onBuscar() {
        let params = "CodConsultoraLogged=" + this.state.filtro.CodConsultoraLogged +
            "&CodConsultoraSearched=" + this.state.filtro.CodConsultoraSearched +
            "&NombreConsultora=" + this.state.filtro.NombreConsultora +
            "&DireccionConsultora=" + this.state.filtro.DireccionConsultora +
            "&Period=" + this.state.filtro.Period +
            "&NumeroPagina=" + this.state.filtro.NumeroPagina +
            "&NumeroRegistros=" + this.state.filtro.NumeroRegistros +
            "&TituloPago=" + this.state.filtro.TituloPago +
            "&TituloCarrera=" + this.state.filtro.TituloCarrera +
            "&Estado=" + this.state.filtro.Estado +
            "&DataCadastro=" + this.state.filtro.DataCadastro +
            "&VentaPersonal=" + this.state.filtro.VentaPersonal +
            "&Nivel=" + this.state.filtro.Nivel +
            "&Generation=" + this.state.filtro.Generation +
            "&VOT=" + this.state.filtro.VOT +
            "&VOQ=" + this.state.filtro.VOQ +
            "&LeftBower=" + this.state.filtro.LeftBower +
            "&RigthBower=" + this.state.filtro.RigthBower;

        fetch('http://10.12.9.169/api/report/GetAccountsFilterPaginated/?' + params, {

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
                <div class="content-main margin-top30">
                    <div className="row">
                        <div class="bc-backtitle">
                            <p class="bc-title">BUSCAR CONSULTORA</p>
                        </div>
                        <div className="col-sm-12">
                            <div class="bc-content-body">
                                <div class="col-md-3 mt-10">
                                    <span class="bc-title-text">Código Consultor</span><br />
                                    <input type="text" id="bc-codigo" name="CodConsultoraSearched" value={this.state.CodConsultora} onChange={this.handleInputChange} class="inpBusqueda clearable" />
                                </div>
                                <div class="col-md-3 mt-10">
                                    <span class="bc-title-text">Nombre Consultor</span><br />
                                    <input type="text" id="bc-documento" name="NombreConsultora" value={this.state.NombreConsultora} class="inpBusqueda" />
                                </div>
                                <div class="col-md-3 mt-10">
                                    <span class="bc-title-text">Código Patrocinador</span><br />
                                    <input type="text" id="bc-direccion" class="inpBusquedaC" name="CodPatrocinador" value={this.state.CodPatrocinador} onChange={this.handleInputChange} />
                                </div>

                                <div class="col-md-3 mt-10">
                                    <span class="bc-title-text">Nombre Patrocinador</span><br />
                                    <input type="text" id="bc-direccion" class="inpBusquedaC" name="NombrePatrocinador" value={this.state.NombrePatrocinador} onChange={this.handleInputChange} />
                                </div>
                                <p class="bc-filters"><a id="lnk-filtros" href="#Filters" data-toggle="collapse"><span class="text-filtros">OCULTAR FILTROS</span></a><i class="icon-menu-down"></i></p>
                                <div id="Filters" class="collapse in">
                                    <div class="row">
                                        <div class="col-md-3 margin-top30">
                                            <span class="bc-title-text">Nivel</span><br />
                                            <div class="RegionZonaSeccionButton">
                                                <a id="A" class="btnSeccion" name="Nivel1" onClick={this.changeActiveButton}>1</a>
                                                <a id="B" class="btnSeccion" name="Nivel2" onClick={this.changeActiveButton}>2</a>
                                                <a id="C" class="btnSeccion" name="Nivel3" onClick={this.changeActiveButton}>3</a>
                                                <a id="D" class="btnSeccion" name="Nivel4" onClick={this.changeActiveButton}>4</a>
                                            </div>
                                        </div>
                                        <div class="col-md-8 margin-top30">
                                            <span class="bc-title-text">Generación</span><br />
                                            <div class="RegionZonaSeccionButton">
                                                <a id="A" class="btnSeccion" name="Generacion1" onClick={this.changeActiveButton}>1</a>
                                                <a id="B" class="btnSeccion" name="Generacion2" onClick={this.changeActiveButton}>2</a>
                                                <a id="C" class="btnSeccion" name="Generacion3" onClick={this.changeActiveButton}>3</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-8 margin-top30">
                                            <span class="bc-title-text">Título</span><br />
                                            <div class="segmentoButton">
                                                <a id="0" title="Consultor" class="btnSegmento line-height2" name="Consultor" onClick={this.changeActiveButton}>Consultor</a>
                                                <a id="1" title="Cons. Senior" class="btnSegmento line-height2" name="ConsultorSenior" onClick={this.changeActiveButton}>Cons. Senior</a>
                                                <a id="2" title="Cons. Especialista" class="btnSegmento line-height2" name="ConsultorEspecialista" onClick={this.changeActiveButton}>Cons. Especialista</a>
                                                <a id="3" title="Empresario" class="btnSegmento line-height2" name="Empresario" onClick={this.changeActiveButton}>Empresario</a>
                                                <a id="4" title="Empr. Avanzado" class="btnSegmento line-height2" name="EmpresarioAvanzado" onClick={this.changeActiveButton}>Empr. Avanzado</a>
                                                <a id="5" title="Emp. Principal" class="btnSegmento line-height2" name="EmpresarioPrincipal" onClick={this.changeActiveButton}>Emp. Principal</a>
                                                <a id="6" title="Executivo" class="btnSegmento line-height2" name="Executivo" onClick={this.changeActiveButton}>Executivo</a>
                                                <a id="7" title="Exec. Prestige" class="btnSegmento line-height2" name="ExecutivoPrestige" onClick={this.changeActiveButton}>Exec. Prestige</a>
                                                <a id="8" title="Exec. Elite" class="btnSegmento line-height2" name="ExecutivoElite" onClick={this.changeActiveButton}>Exec. Elite</a>
                                                <a id="9" title="Exec. Premium" class="btnSegmento line-height2" name="ExecutivoPremium" onClick={this.changeActiveButton}>Exec. Premium</a>
                                                <a id="9" title="Exec. Supreme" class="btnSegmento line-height2" name="ExecutivoSupreme" onClick={this.changeActiveButton}>Exec. Supreme</a>
                                                <a id="9" title="Exec. Nacional" class="btnSegmento line-height2" name="ExecutivoNacional" onClick={this.changeActiveButton}>Exec. Nacional</a>
                                                <a id="9" title="Gran Exec. Nacional" class="btnSegmento line-height2" name="GranExecutivoNacional" onClick={this.changeActiveButton}>Gran Exec. Nacional</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-8 margin-top30">
                                            <span class="bc-title-text">Estatus</span><br />
                                            <div class="segmentoButton">
                                                <a id="1" title="Activa" class="btnSegmento line-height2" name="EstatusActiva" onClick={this.changeActiveButton}>Activa</a>
                                                <a id="0" title="Inactiva (1)" class="btnSegmento line-height2" name="EstatusInactiva1" onClick={this.changeActiveButton}>Inactiva (1)</a>
                                                <a id="0" title="Inactiva (2)" class="btnSegmento line-height2" name="EstatusInactiva2" onClick={this.changeActiveButton}>Inactiva (2)</a>
                                                <a id="0" title="Inactiva (3)" class="btnSegmento line-height2" name="EstatusInactiva3" onClick={this.changeActiveButton}>Inactiva (3)</a>
                                                <a id="0" title="Inactiva (4)" class="btnSegmento line-height2" name="EstatusInactiva4" onClick={this.changeActiveButton}>Inactiva (4)</a>
                                                <a id="0" title="Inactiva (5)" class="btnSegmento line-height2" name="EstatusInactiva5" onClick={this.changeActiveButton}>Inactiva (5)</a>
                                                <a id="0" title="Inactiva (6)" class="btnSegmento line-height2" name="EstatusInactiva6" onClick={this.changeActiveButton}>Inactiva (6)</a>
                                                <a id="0" title="Inactiva (7)" class="btnSegmento line-height2" name="EstatusInactiva7" onClick={this.changeActiveButton}>Inactiva (7)</a>
                                                <a id="0" title="Posible Egreso" class="btnSegmento line-height2" name="EstatusPosibleEgreso" onClick={this.changeActiveButton}>Posible Egreso</a>
                                                <a id="0" title="Cadastra" class="btnSegmento line-height2" name="EstatusCadastra" onClick={this.changeActiveButton}>Cadastra</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="col-md-2 mt-10">
                                            <span class="bc-title-text">Fecha ingreso</span><br />
                                            <input type="text" id="bc-codigo" value={this.state.CodConsultora} onChange={this.handleInputChange} class="inpBusquedaM clearable" />
                                        </div>
                                        <div class="col-md-2 mt-10">
                                            <span class="bc-title-text">Hasta</span><br />
                                            <input type="text" id="bc-codigo" value={this.state.CodConsultora} onChange={this.handleInputChange} class="inpBusquedaM clearable" />
                                        </div>
                                        <div class="col-md-2 mt-10 margin-lef10">
                                            <span class="bc-title-text">Venta Personal</span><br />
                                            <input type="text" id="bc-documento" class="inpBusquedaM" />
                                        </div>
                                        <div class="col-md-2 mt-10">
                                            <span class="bc-title-text">Hasta</span><br />
                                            <input type="text" id="bc-documento" class="inpBusquedaM" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div class="form-group">
                                            <div class="col-md-2 mt-10">
                                                <span class="bc-title-text">Venta Organización</span><br />
                                                <input type="text" id="bc-direccion" class="inpBusquedaM" value={this.state.DireccionConsultora} onChange={this.handleInputChange} />
                                            </div>
                                            <div class="col-md-2 mt-10">
                                                <span class="bc-title-text">Hasta</span><br />
                                                <input type="text" id="bc-direccion" class="inpBusquedaM" value={this.state.DireccionConsultora} onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row margin-bottom20">
                                    <div class="col-sm-4">
                                        <button type="button" class="btnBusqueda clearable buttonBuscar" onClick={this.onBuscar}><FontAwesomeIcon icon={faSearch} />  &nbsp;BUSCAR</button><br />
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
