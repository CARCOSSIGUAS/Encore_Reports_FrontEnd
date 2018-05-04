import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GridConsultora from '../../components/buscar-consultora/GridConsultora';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import { RingLoader } from 'react-spinners';
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
import { DEFAULT_ECDH_CURVE } from 'tls';

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
            isDisplayed: false,
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
        this.changeNivelActive = this.changeNivelActive.bind(this);
        this.changeGenerationActive = this.changeGenerationActive.bind(this);
        this.changeTitlesActive = this.changeTitlesActive.bind(this);
        this.changeStatusActive = this.changeStatusActive.bind(this);
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
        debugger;
        const target = event.target;
        target.innerHTML = 'Oc'

        let cssActive = '';
        if (this.state.openFilter == "activeFilterHidden") {
            cssActive = "activeFilter";
            target.innerHTML = 'OCULTAR FILTROS'
        }
        else {
            cssActive = "activeFilterHidden";
            target.innerHTML = 'MOSTRAR FILTROS'
        }

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

    showHiddenFilters(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.state.filtro[name] = value;
        this.setState({
            filtro: this.state.filtro
        });
    }

    changeNivelActive(event) {
        const target = event.target;
        const name = target.name;

        let isActive = false;
        let nivel = this.state.filtro.Nivel;

        if (target.className.indexOf("active") > -1) {
            target.className = target.className.replace("active", "");
        }
        else {
            target.className += " active";
            isActive = true;
        }

        if (nivel.indexOf(name) > -1)
            nivel = nivel.replace(name + ",", '');
        else
            nivel += name + ',';

        this.state.filtro.Nivel = nivel;
        this.setState({
            filtro: this.state.filtro
        });

    }

    changeStatusActive(event) {
        const target = event.target;
        const name = target.name;

        let isActive = false;
        let estado = this.state.filtro.Estado;

        if (target.className.indexOf("active") > -1) {
            target.className = target.className.replace("active", "");
        }
        else {
            target.className += " active";
            isActive = true;
        }

        if (estado.indexOf(name) > -1)
            estado = estado.replace(name + ",", '');
        else
            estado += name + ',';

        this.state.filtro.Estado = estado;
        this.setState({
            filtro: this.state.filtro
        });

    }


    changeGenerationActive(event) {
        const target = event.target;
        const name = target.name;

        let isActive = false;
        let generation = this.state.filtro.Generation;

        if (target.className.indexOf("active") > -1) {
            target.className = target.className.replace("active", "");
        }
        else {
            target.className += " active";
            isActive = true;
        }

        if (generation.indexOf(name) > -1)
            generation = generation.replace(name + ",", '');
        else
            generation += name + ',';

        this.state.filtro.Generation = generation;
        this.setState({
            filtro: this.state.filtro
        });

    }

    changeTitlesActive(event) {
        const target = event.target;
        const name = target.name;

        let isActive = false;
        let title = this.state.filtro.TituloCarrera;

        if (target.className.indexOf("active") > -1) {
            target.className = target.className.replace("active", "");
        }
        else {
            target.className += " active";
            isActive = true;
        }

        if (title.indexOf(name) > -1)
            title = title.replace(name + ",", '');
        else
            title += name + ',';

        this.state.filtro.TituloCarrera = title;
        this.setState({
            filtro: this.state.filtro
        });

    }


    changeActiveButton(event) {
        const target = event.target;
        const name = target.name;
        let isActive = false;

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

    onBuscar(numPage) {
        
        var pageNumber = (typeof numPage != 'undefined' && !isNaN(numPage)) ? numPage : this.state.filtro.NumeroPagina;
        this.setState({ activaClass: 'active' });
        let params = "accountId=" + this.state.filtro.CodConsultoraLogged +
            "&accountNumberSearch=" + this.state.filtro.CodConsultoraSearched +
            "&AccountNameSearch=" + this.state.filtro.NombreConsultora +
            "&sponsorNumberSearch=" + this.state.filtro.CodPatrocinador +
            "&SponsorNameSearch=" + this.state.filtro.NombrePatrocinador +
            "&periodId=" + this.state.filtro.Period +
            "&levelIds=" + this.state.filtro.Nivel +
            "&Generation=" + this.state.filtro.Generation +
            "&careerTitleIds=" + this.state.filtro.TituloCarrera +
            "&accountStatusIds=" + this.state.filtro.Estado +
            "&pageNumber=" + pageNumber+
            "&pageSize=" + this.state.filtro.NumeroRegistros;

        fetch('http://datarequestqas.lbel.com.br/api/report/sponsoreds/?' + params, {

        })
            .then((response) => {
                return response.json()
            })
            .then((items) => {
                let display = items != null && items.accountsInformationDTO.length > 0 ? true : false;
                this.setState({ activaClass: 'inactive', items: items, isDisplayed: display});
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
                        <RingLoader
                            color={'rgb(189, 16, 224)'}
                            loading={this.state.loading}
                            className="loader-pacman"
                        />
                    </div>
                </div>
                <div className="content-main margin-top30">
                    <div className="row">
                        <div className="bc-backtitle">
                            <p className="bc-title">PESQUISAR CONSULTORES</p>
                        </div>
                        <div className="col-sm-12">
                            <div className="bc-content-body">
                                <div className="col-md-3">
                                    <span className="bc-title-text">Código Consultor</span><br />
                                    <input type="text" id="bc-codigo" name="CodConsultoraSearched" value={this.state.CodConsultora} onChange={this.handleInputChange} className="inpBusqueda clearable" />
                                </div>
                                <div className="col-md-3">
                                    <span className="bc-title-text">Nome Consultor</span><br />
                                    <input type="text" id="bc-documento" name="NombreConsultora" value={this.state.NombreConsultora} onChange={this.handleInputChange} className="inpBusqueda" />
                                </div>
                                <div className="col-md-3">
                                    <span className="bc-title-text">Código Patrocinador</span><br />
                                    <input type="text" id="bc-direccion" className="inpBusquedaC" name="CodPatrocinador" value={this.state.CodPatrocinador} onChange={this.handleInputChange} />
                                </div>

                                <div className="col-md-3">
                                    <span className="bc-title-text">Nome Patrocinado</span><br />
                                    <input type="text" id="bc-direccion" className="inpBusquedaC" name="NombrePatrocinador" value={this.state.NombrePatrocinador} onChange={this.handleInputChange} />
                                </div>
                                <p onClick={this.filterOpen} className="bc-filters"><a id="lnk-filtros"><span className="text-filtros">MOSTRAR FILTROS</span></a><i className="icon-menu-down"></i></p>
                                <div id="Filters" className={this.state.openFilter}>
                                    <div className="row">
                                        <div className="col-md-3 margin-top30">
                                            <span className="bc-title-text">Nivel</span><br />
                                            <div className="RegionZonaSeccionButton">
                                                <a id="A" className="btnSeccion" name="1" onClick={this.changeNivelActive}>1</a>
                                                <a id="B" className="btnSeccion" name="2" onClick={this.changeNivelActive}>2</a>
                                                <a id="C" className="btnSeccion" name="3" onClick={this.changeNivelActive}>3</a>
                                                <a id="D" className="btnSeccion" name="4" onClick={this.changeNivelActive}>4</a>
                                            </div>
                                        </div>
                                        <div className="col-md-8 margin-top30">
                                            <span className="bc-title-text">Geraçao</span><br />
                                            <div className="RegionZonaSeccionButton">
                                                <a id="A" className="btnSeccion" name="1" onClick={this.changeGenerationActive}>1</a>
                                                <a id="B" className="btnSeccion" name="2" onClick={this.changeGenerationActive}>2</a>
                                                <a id="C" className="btnSeccion" name="3" onClick={this.changeGenerationActive}>3</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 margin-top30">
                                            <span className="bc-title-text">Título</span><br />
                                            <div className="segmentoButton">
                                                <a id="0" title="Consultor" className="btnSegmento line-height2" name="1" onClick={this.changeTitlesActive}>Consultor</a>
                                                <a id="1" title="Cons. Senior" className="btnSegmento line-height2" name="2" onClick={this.changeTitlesActive}>Cons. Senior</a>
                                                <a id="2" title="Cons. Especialista" className="btnSegmento line-height2" name="4" onClick={this.changeTitlesActive}>Cons. Especialista</a>
                                                <a id="3" title="Empresario" className="btnSegmento line-height2" name="5" onClick={this.changeTitlesActive}>Empresario</a>
                                                <a id="4" title="Empr. Avanzado" className="btnSegmento line-height2" name="6" onClick={this.changeTitlesActive}>Empr. Avanzado</a>
                                                <a id="5" title="Emp. Principal" className="btnSegmento line-height2" name="7" onClick={this.changeTitlesActive}>Emp. Principal</a>
                                                <a id="6" title="Executivo" className="btnSegmento line-height2" name="8" onClick={this.changeTitlesActive}>Executivo</a>
                                                <a id="7" title="Exec. Prestige" className="btnSegmento line-height2" name="9" onClick={this.changeTitlesActive}>Exec. Prestige</a>
                                                <a id="8" title="Exec. Elite" className="btnSegmento line-height2" name="10" onClick={this.changeTitlesActive}>Exec. Elite</a>
                                                <a id="9" title="Exec. Premium" className="btnSegmento line-height2" name="11" onClick={this.changeTitlesActive}>Exec. Premium</a>
                                                <a id="10" title="Exec. Supreme" className="btnSegmento line-height2" name="12" onClick={this.changeTitlesActive}>Exec. Supreme</a>
                                                <a id="11" title="Exec. Nacional" className="btnSegmento line-height2" name="13" onClick={this.changeTitlesActive}>Exec. Nacional</a>
                                                <a id="12" title="Gran Exec. Nacional" className="btnSegmento line-height2" name="14" onClick={this.changeTitlesActive}>Gran Exec. Nacional</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 margin-top30">
                                            <span className="bc-title-text">Status</span><br />
                                            <div className="segmentoButton">
                                                <a id="1" title="Ativa" className="btnSegmento line-height2" name="1" onClick={this.changeStatusActive}>Ativa</a>
                                                <a id="0" title="Inativa (1)" className="btnSegmento line-height2" name="2" onClick={this.changeStatusActive}>Inativa (1)</a>
                                                <a id="0" title="Inativa (2)" className="btnSegmento line-height2" name="3" onClick={this.changeStatusActive}>Inativa (2)</a>
                                                <a id="0" title="Inativa (3)" className="btnSegmento line-height2" name="4" onClick={this.changeStatusActive}>Inativa (3)</a>
                                                <a id="0" title="Inativa (4)" className="btnSegmento line-height2" name="5" onClick={this.changeStatusActive}>Inativa (4)</a>
                                                <a id="0" title="Inativa (5)" className="btnSegmento line-height2" name="6" onClick={this.changeStatusActive}>Inativa (5)</a>
                                                <a id="0" title="Inativa (6)" className="btnSegmento line-height2" name="7" onClick={this.changeStatusActive}>Inativa (6)</a>
                                                <a id="0" title="Inativa (7)" className="btnSegmento line-height2" name="8" onClick={this.changeStatusActive}>Inativa (7)</a>
                                                <a id="0" title="Posible Egreso" className="btnSegmento line-height2" name="18" onClick={this.changeStatusActive}>Possível Cessada</a>
                                                <a id="0" title="Cadastra" className="btnSegmento line-height2" name="17" onClick={this.changeStatusActive}>Cadastrada</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <span className="bc-title-text">Data Cadastro</span><br />
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
                                            <span className="bc-title-text">até</span><br />

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
                                            <span className="bc-title-text">VP</span><br />
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
                                                <span className="bc-title-text">VO</span><br />
                                                <input type="text" id="bc-direccion" className="inpBusquedaM" value={this.state.DireccionConsultora} onChange={this.handleInputChange} />
                                            </div>
                                            <div className="col-md-2">
                                                <span className="bc-title-text">até</span><br />
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
                        {this.state.isDisplayed ? (
                            <GridConsultora data={this.state.items} filters={this.state.filtro} eventBuscar={this.onBuscar} />
                        ) : (
                                <h2>No se encontraron resultados</h2>
                            )}

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
