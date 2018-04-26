import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GridConsultora from '../../components/buscar-consultora/GridConsultora';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import { PacmanLoader } from 'react-spinners';
import 'rc-calendar/assets/index.css';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';
import TimePickerPanel from 'rc-time-picker/lib/Panel';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

import './BuscarConsultora.css';

const timePickerElement = <TimePickerPanel defaultValue={moment('00:00:00', 'HH:mm:ss')} />;

const format = 'DD-MM-YYYY';

function getFormat(time) {
    return 'DD-MM-YYYY';
}

class BuscarConsultora extends Component {
    constructor(props) {
        super(props);

        const { user } = this.props;


        this.state = {
            showTime: true,
            disabled: false,
            value: '',
            valueDateFin: '',
            openFilter: 'activeFilterHidden',
            filtro: {
                CodConsultoraLogged: user.accountID,
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
                Nivel1: false,
                Nivel2: false,
                Nivel3: false,
                Nivel4: false,
                Generacion1: false,
                Generacion2: false,
                Generacion3: false,
            },
            items: [],
            activaClass: 'inactive'
        };
        this.onBuscar = this.onBuscar.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeActiveButton = this.changeActiveButton.bind(this);
        this.filterOpen = this.filterOpen.bind(this);
    }
    onChange = (value) => {
        this.setState({
            value
        });
    }

    onChangeDateFin = (valueDateFin) => {
        this.setState({
            valueDateFin
        });
    }

    filterOpen(event) {
        var cssActive = this.state.openFilter == "activeFilterHidden" ? "activeFilter" : "activeFilterHidden";
        this.setState({
            openFilter: cssActive
        });
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
        this.setState({ activaClass: 'active' });
        let params = "CodConsultoraLogged=" + this.state.filtro.CodConsultoraLogged +
            "&CodConsultoraSearched=" + this.state.filtro.CodConsultoraSearched +
            "&NombreConsultora=" + this.state.filtro.NombreConsultora +
            "&CodPatrocinador=" + this.state.filtro.CodPatrocinador +
            "&NombrePatrocinador=" + this.state.filtro.NombrePatrocinador +
            "&Period=" + this.state.filtro.Period +
            "&NumeroPagina=" + this.state.filtro.NumeroPagina +
            "&NumeroRegistros=" + this.state.filtro.NumeroRegistros;

        fetch('http://10.12.9.83:3391/api/report/GetAccountsFilterPaginated/?' + params, {

        })
            .then((response) => {
                return response.json()
            })
            .then((items) => {
                this.setState({ activaClass: 'inactive', items: items });
            });
    }


    render() {
        const state = this.state;
        const calendar = (<Calendar
            locale={enUS}
            style={{ zIndex: 1000 }}
            dateInputPlaceholder="please input"
            formatter={getFormat(state.showTime)}
            timePicker={state.showTime ? timePickerElement : null}
            defaultValue={this.props.defaultCalendarValue}
        />);

        return (
            <div className="container">
                <div className={'sweet-loading ' + this.state.activaClass}>
                    <div className="loader-pacman">
                        <PacmanLoader
                            color={'rgb(189, 16, 224)'}
                            loading={this.state.loading}
                            className="loader-pacman"
                        />
                    </div>
                </div>
                <div className="content-main margin-top30">
                    <div className="row">
                        <div className="bc-backtitle">
                            <p className="bc-title">BUSCAR CONSULTORA</p>
                        </div>
                        <div className="col-sm-12">
                            <div className="bc-content-body">
                                <div className="col-md-3">
                                    <span className="bc-title-text">Código Consultor</span><br />
                                    <input type="text" id="bc-codigo" name="CodConsultoraSearched" value={this.state.CodConsultora} onChange={this.handleInputChange} className="inpBusqueda clearable" />
                                </div>
                                <div className="col-md-3">
                                    <span className="bc-title-text">Nombre Consultor</span><br />
                                    <input type="text" id="bc-documento" name="NombreConsultora" value={this.state.NombreConsultora} onChange={this.handleInputChange} className="inpBusqueda" />
                                </div>
                                <div className="col-md-3">
                                    <span className="bc-title-text">Código Patrocinador</span><br />
                                    <input type="text" id="bc-direccion" className="inpBusquedaC" name="CodPatrocinador" value={this.state.CodPatrocinador} onChange={this.handleInputChange} />
                                </div>

                                <div className="col-md-3">
                                    <span className="bc-title-text">Nombre Patrocinador</span><br />
                                    <input type="text" id="bc-direccion" className="inpBusquedaC" name="NombrePatrocinador" value={this.state.NombrePatrocinador} onChange={this.handleInputChange} />
                                </div>
                                <p onClick={this.filterOpen} className="bc-filters"><a id="lnk-filtros"><span className="text-filtros">OCULTAR FILTROS</span></a><i className="icon-menu-down"></i></p>
                                <div id="Filters" className={this.state.openFilter}>
                                    <div className="row">
                                        <div className="col-md-3 margin-top30">
                                            <span className="bc-title-text">Nivel</span><br />
                                            <div className="RegionZonaSeccionButton">
                                                <a id="A" className="btnSeccion" name="Nivel1" onClick={this.changeActiveButton}>1</a>
                                                <a id="B" className="btnSeccion" name="Nivel2" onClick={this.changeActiveButton}>2</a>
                                                <a id="C" className="btnSeccion" name="Nivel3" onClick={this.changeActiveButton}>3</a>
                                                <a id="D" className="btnSeccion" name="Nivel4" onClick={this.changeActiveButton}>4</a>
                                            </div>
                                        </div>
                                        <div className="col-md-8 margin-top30">
                                            <span className="bc-title-text">Generación</span><br />
                                            <div className="RegionZonaSeccionButton">
                                                <a id="A" className="btnSeccion" name="Generacion1" onClick={this.changeActiveButton}>1</a>
                                                <a id="B" className="btnSeccion" name="Generacion2" onClick={this.changeActiveButton}>2</a>
                                                <a id="C" className="btnSeccion" name="Generacion3" onClick={this.changeActiveButton}>3</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 margin-top30">
                                            <span className="bc-title-text">Título</span><br />
                                            <div className="segmentoButton">
                                                <a id="0" title="Consultor" className="btnSegmento line-height2" name="Consultor" onClick={this.changeActiveButton}>Consultor</a>
                                                <a id="1" title="Cons. Senior" className="btnSegmento line-height2" name="ConsultorSenior" onClick={this.changeActiveButton}>Cons. Senior</a>
                                                <a id="2" title="Cons. Especialista" className="btnSegmento line-height2" name="ConsultorEspecialista" onClick={this.changeActiveButton}>Cons. Especialista</a>
                                                <a id="3" title="Empresario" className="btnSegmento line-height2" name="Empresario" onClick={this.changeActiveButton}>Empresario</a>
                                                <a id="4" title="Empr. Avanzado" className="btnSegmento line-height2" name="EmpresarioAvanzado" onClick={this.changeActiveButton}>Empr. Avanzado</a>
                                                <a id="5" title="Emp. Principal" className="btnSegmento line-height2" name="EmpresarioPrincipal" onClick={this.changeActiveButton}>Emp. Principal</a>
                                                <a id="6" title="Executivo" className="btnSegmento line-height2" name="Executivo" onClick={this.changeActiveButton}>Executivo</a>
                                                <a id="7" title="Exec. Prestige" className="btnSegmento line-height2" name="ExecutivoPrestige" onClick={this.changeActiveButton}>Exec. Prestige</a>
                                                <a id="8" title="Exec. Elite" className="btnSegmento line-height2" name="ExecutivoElite" onClick={this.changeActiveButton}>Exec. Elite</a>
                                                <a id="9" title="Exec. Premium" className="btnSegmento line-height2" name="ExecutivoPremium" onClick={this.changeActiveButton}>Exec. Premium</a>
                                                <a id="9" title="Exec. Supreme" className="btnSegmento line-height2" name="ExecutivoSupreme" onClick={this.changeActiveButton}>Exec. Supreme</a>
                                                <a id="9" title="Exec. Nacional" className="btnSegmento line-height2" name="ExecutivoNacional" onClick={this.changeActiveButton}>Exec. Nacional</a>
                                                <a id="9" title="Gran Exec. Nacional" className="btnSegmento line-height2" name="GranExecutivoNacional" onClick={this.changeActiveButton}>Gran Exec. Nacional</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 margin-top30">
                                            <span className="bc-title-text">Estatus</span><br />
                                            <div className="segmentoButton">
                                                <a id="1" title="Activa" className="btnSegmento line-height2" name="EstatusActiva" onClick={this.changeActiveButton}>Activa</a>
                                                <a id="0" title="Inactiva (1)" className="btnSegmento line-height2" name="EstatusInactiva1" onClick={this.changeActiveButton}>Inactiva (1)</a>
                                                <a id="0" title="Inactiva (2)" className="btnSegmento line-height2" name="EstatusInactiva2" onClick={this.changeActiveButton}>Inactiva (2)</a>
                                                <a id="0" title="Inactiva (3)" className="btnSegmento line-height2" name="EstatusInactiva3" onClick={this.changeActiveButton}>Inactiva (3)</a>
                                                <a id="0" title="Inactiva (4)" className="btnSegmento line-height2" name="EstatusInactiva4" onClick={this.changeActiveButton}>Inactiva (4)</a>
                                                <a id="0" title="Inactiva (5)" className="btnSegmento line-height2" name="EstatusInactiva5" onClick={this.changeActiveButton}>Inactiva (5)</a>
                                                <a id="0" title="Inactiva (6)" className="btnSegmento line-height2" name="EstatusInactiva6" onClick={this.changeActiveButton}>Inactiva (6)</a>
                                                <a id="0" title="Inactiva (7)" className="btnSegmento line-height2" name="EstatusInactiva7" onClick={this.changeActiveButton}>Inactiva (7)</a>
                                                <a id="0" title="Posible Egreso" className="btnSegmento line-height2" name="EstatusPosibleEgreso" onClick={this.changeActiveButton}>Posible Egreso</a>
                                                <a id="0" title="Cadastra" className="btnSegmento line-height2" name="EstatusCadastra" onClick={this.changeActiveButton}>Cadastra</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <span className="bc-title-text">Fecha ingreso</span><br />
                                            <DatePicker
                                                animation="slide-up"
                                                calendar={calendar}
                                                value={state.value}
                                                onChange={this.onChange}
                                            >
                                                {
                                                    ({ value }) => {
                                                        return (
                                                            <span tabIndex="0">
                                                                <input
                                                                    readOnly
                                                                    tabIndex="-1"
                                                                    className="inpBusquedaM clearable"
                                                                    value={value && value.format(getFormat(state.showTime)) || ''}
                                                                />
                                                            </span>
                                                        );
                                                    }
                                                }
                                            </DatePicker>
                                        </div>
                                        <div className="col-md-2">
                                            <span className="bc-title-text">Hasta</span><br />

                                            <DatePicker
                                                animation="slide-up"
                                                calendar={calendar}
                                                value={state.valueDateFin}
                                                onChange={this.onChangeDateFin}
                                            >
                                                {
                                                    ({ value }) => {
                                                        return (
                                                            <span tabIndex="0">
                                                                <input
                                                                    readOnly
                                                                    tabIndex="-1"
                                                                    className="inpBusquedaM clearable"
                                                                    value={value && value.format(getFormat(state.showTime)) || ''}
                                                                />
                                                            </span>
                                                        );
                                                    }
                                                }
                                            </DatePicker>
                                        </div>
                                        <div className="col-md-2 margin-lef10">
                                            <span className="bc-title-text">Venta Personal</span><br />
                                            <input type="text" id="bc-documento" className="inpBusquedaM" />
                                        </div>
                                        <div className="col-md-2">
                                            <span className="bc-title-text">Hasta</span><br />
                                            <input type="text" id="bc-documento" className="inpBusquedaM" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-md-2">
                                                <span className="bc-title-text">Venta Organización</span><br />
                                                <input type="text" id="bc-direccion" className="inpBusquedaM" value={this.state.DireccionConsultora} onChange={this.handleInputChange} />
                                            </div>
                                            <div className="col-md-2">
                                                <span className="bc-title-text">Hasta</span><br />
                                                <input type="text" id="bc-direccion" className="inpBusquedaM" value={this.state.DireccionConsultora} onChange={this.handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row margin-bottom20">
                                    <div className="col-sm-4">
                                        <button type="button" className="btnBusqueda clearable buttonBuscar" onClick={this.onBuscar}><FontAwesomeIcon icon={faSearch} />  &nbsp;BUSCAR</button><br />
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

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

const BuscarConsultoraPage = connect(mapStateToProps)(BuscarConsultora);

export default BuscarConsultoraPage;
