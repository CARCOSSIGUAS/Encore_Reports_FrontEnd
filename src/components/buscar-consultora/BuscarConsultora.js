import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GridConsultora from '../../components/buscar-consultora/GridConsultora';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import { RingLoader } from 'react-spinners';

import './BuscarConsultora.css';
import 'rc-calendar/assets/index.css';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import enUS from 'rc-calendar/lib/locale/en_US';
import moment from 'moment';

import DropDown from '../../components/utils/DropDown';
import { DEFAULT_ECDH_CURVE } from 'tls';

function getFormat() {
    return 'DD-MM-YYYY';
}

class BuscarConsultora extends Component {
    constructor(props) {
        super(props);
        
        const { user } = this.props;
        const { item } = this.props;

        this.state = {
            disabled: false,
            JoinDateFrom: '',
            JoinDateTo: '',
            openFilter: 'activeFilterHidden',
            isDisplayed: false,
            filtro: {
                CodConsultoraLogged: user.accountID,
                periodId: null,
                CodConsultoraSearched: 0,
                CodPatrocinador: 0,
                NombrePatrocinador: '',
                NombreConsultora: '',
                Nivel: '',
                Generation: '',
                TitleType: 1,
                Title: '',
                Estado: '',

                PQVFrom: 0,
                PQVTo: null,
                DQVFrom: 0,
                DQVTo: null,
                OrderBy : '',
                NumeroPagina: 1,
                NumeroRegistros: 10
            },
            items: [],
            periodsOptions: [],
            activaClass: 'inactive',
            stringFilter : ''
        };
        this.onBuscar = this.onBuscar.bind(this);
        this.onChangeOrderBy = this.onChangeOrderBy.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeActiveButton = this.changeActiveButton.bind(this);
        this.filterOpen = this.filterOpen.bind(this);
        this.changeNivelActive = this.changeNivelActive.bind(this);
        this.changeGenerationActive = this.changeGenerationActive.bind(this);
        this.changeTitlesActive = this.changeTitlesActive.bind(this);
        this.changeStatusActive = this.changeStatusActive.bind(this);
        
    }

    componentDidMount() {
        fetch('http://datarequestqas.lbel.com.br/api/reportaccount/periods')
            .then((response) => {
                if (!response.ok) { 
                    return Promise.reject(response.statusText);
                }
                return response.json()
            })
            .then((results) => {
                this.setState({ 
                    periodsOptions: results.result,
                });
            });
    }

    onChangeOrderBy(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.state.filtro[name] = value;
        this.setState({
            filtro: this.state.filtro
        });

        this.onBuscar();
    }

    onChangeDateFrom = (JoinDateFrom) => {
        this.setState({
            JoinDateFrom
        });
    }

    onChangeDateTo = (JoinDateTo) => {
        this.setState({
            JoinDateTo
        });
    }

    filterOpen(event) {
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
        let title = this.state.filtro.Title;

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

        this.state.filtro.Title = title;
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
        this.state.filtro.NumeroPagina = pageNumber;
        
        this.setState({
            activaClass: 'active',
            filtro: this.state.filtro
        });
        
        let params = "accountId=" + this.state.filtro.CodConsultoraLogged +
            "&periodId=" + this.state.filtro.periodId +
            "&accountNumberSearch=" + this.state.filtro.CodConsultoraSearched +
            "&accountNameSearch=" + this.state.filtro.NombreConsultora +
            "&sponsorNumberSearch=" + this.state.filtro.CodPatrocinador +
            "&sponsorNameSearch=" + this.state.filtro.NombrePatrocinador +

            "&levelIds=" + this.state.filtro.Nivel +
            "&generationIds=" + this.state.filtro.Generation +
            "&titleType=" + this.state.filtro.TitleType +
            "&titleIds=" + this.state.filtro.Title +
            "&accountStatusIds=" + this.state.filtro.Estado +

            "&joinDateFrom=" + moment(this.state.JoinDateFrom).format(getFormat()) +
            "&joinDateTo=" + moment(this.state.JoinDateTo).format(getFormat()) +

            "&pqvFrom=" + this.state.filtro.PQVFrom +
            "&pqvTo=" + this.state.filtro.PQVTo +
            "&dqvFrom=" + this.state.filtro.DQVFrom +
            "&dqvTo=" + this.state.filtro.DQVTo +
            "&orderBy=" + this.state.filtro.OrderBy +

            "&pageSize=" + this.state.filtro.NumeroRegistros +
            "&pageNumber=" + pageNumber;
        
            this.setState({ stringFilter: params});

        fetch('http://datarequestqas.lbel.com.br/api/reportaccount/sponsoreds/?' + params, {

        })
            .then((response) => {
                if (!response.ok) { 
                    return Promise.reject(response.statusText);
                }
                return response.json()
            })
            .then((items) => {
                let display = items != null && items.items.length > 0 ? true : false;
                this.setState({ activaClass: 'inactive', items: items, isDisplayed: display});
            })
            .catch(error => 
            {
                this.setState({ activaClass: 'inactive', isDisplayed: false});
            });
    }


    render() {
        const state = this.state;
        const calendar = (<Calendar
            locale={enUS}
            style={{ zIndex: 1000 }}
            dateInputPlaceholder="Please input"
            formatter={getFormat()}
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
                                <div className="col-md-2">
                                    <span className="bc-title-text">Campanha</span><br />
                                    <DropDown 
                                        name = "periodId" 
                                        handleChange={ this.handleInputChange } 
                                        items = { this.state.periodsOptions }
                                        value = { this.state.filtro.periodId }
                                        defaultOption = "select Period"
                                    />
                                </div>
                            </div>
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
                                        <div className="col-md-2 margin-top30">
                                            <span className="bc-title-text">Título</span>
                                            <select name = "TitleType" className="form-control input-sm" onChange={this.handleInputChange}>
                                                <option value="1">Título de Carrera</option>
                                                <option value="2">Título de Pago</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
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
                                                <a id="1" title="Ativo" className="btnSegmento line-height2" name="Ativo" onClick={this.changeStatusActive}>Ativa</a>
                                                <a id="0" title="Inativa (1)" className="btnSegmento line-height2" name="Inativa(1)" onClick={this.changeStatusActive}>Inativa (1)</a>
                                                <a id="0" title="Inativa (2)" className="btnSegmento line-height2" name="Inativa(2)" onClick={this.changeStatusActive}>Inativa (2)</a>
                                                <a id="0" title="Inativa (3)" className="btnSegmento line-height2" name="Inativa(3)" onClick={this.changeStatusActive}>Inativa (3)</a>
                                                <a id="0" title="Inativa (4)" className="btnSegmento line-height2" name="Inativa(4)" onClick={this.changeStatusActive}>Inativa (4)</a>
                                                <a id="0" title="Inativa (5)" className="btnSegmento line-height2" name="Inativa(5)" onClick={this.changeStatusActive}>Inativa (5)</a>
                                                <a id="0" title="Inativa (6)" className="btnSegmento line-height2" name="Inativa(6)" onClick={this.changeStatusActive}>Inativa (6)</a>
                                                <a id="0" title="Inativa (7)" className="btnSegmento line-height2" name="Inativa(7)" onClick={this.changeStatusActive}>Inativa (7)</a>
                                                <a id="0" title="Posible Egreso" className="btnSegmento line-height2" name="Inativa(8),Inativa(9)" onClick={this.changeStatusActive}>Possível Cessada</a>
                                                <a id="0" title="Cadastra" className="btnSegmento line-height2" name="Cadastrada" onClick={this.changeStatusActive}>Cadastrada</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2 margin-top30">
                                            <span className="bc-title-text">Data Cadastro</span><br />
                                            <DatePicker
                                                name = "JoinDateFrom"
                                                animation="slide-up"
                                                calendar={calendar}
                                                value = { state.JoinDateFrom }
                                                onChange = { this.onChangeDateFrom }
                                            >
                                                {
                                                    ({ value }) => {
                                                        return (
                                                            <span tabIndex="0">
                                                                <input
                                                                    readOnly
                                                                    tabIndex="-1"
                                                                    className="inpBusquedaM clearable"
                                                                    value = {value && value.format(getFormat()) || ''}
                                                                />
                                                            </span>
                                                        );
                                                    }
                                                }
                                            </DatePicker>
                                        </div>
                                        <div className="col-md-2 margin-top30">
                                            <span className="bc-title-text">até</span><br />
                                            
                                            <DatePicker
                                                name = "JoinDateTo"
                                                animation="slide-up"
                                                calendar={calendar}
                                                value={state.JoinDateTo}
                                                onChange={this.onChangeDateTo}
                                            >
                                                {
                                                    ({ value }) => {
                                                        return (
                                                            <span tabIndex="0">
                                                                <input
                                                                    readOnly
                                                                    tabIndex="-1"
                                                                    className="inpBusquedaM clearable"
                                                                    value= { value && value.format(getFormat()) || '' }
                                                                />
                                                            </span>
                                                        );
                                                    }
                                                }
                                            </DatePicker>
                                        </div>
                                        <div className="col-md-2 margin-top30">
                                            <span className="bc-title-text">VP</span><br />
                                            <input type="text" id="bc-PQVFrom" className="inpBusquedaM" name="PQVFrom" value={this.state.PQVFrom} onChange={this.handleInputChange} />
                                        </div>
                                        <div className="col-md-2 margin-top30">
                                            <span className="bc-title-text">até</span><br />
                                            <input type="text" id="bc-PQVTo" className="inpBusquedaM" name="PQVTo" value={this.state.PQVTo} onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <div className="col-md-2 margin-top30">
                                                <span className="bc-title-text">VO</span><br />
                                                <input type="text" id="bc-DQVFrom" className="inpBusquedaM" name="DQVFrom" value={this.state.DQVFrom} onChange={this.handleInputChange} />
                                            </div>
                                            <div className="col-md-2 margin-top30">
                                                <span className="bc-title-text">até</span><br />
                                                <input type="text" id="bc-DQVTo" className="inpBusquedaM" name="DQVTo" value={this.state.DQVTo} onChange={this.handleInputChange} />
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
                        {   this.state.isDisplayed ? 
                            ( <GridConsultora 
                                data={this.state.items.items}
                                paging = {this.state.items.paging}
                                filters = {this.state.filtro} 
                                stringFilter = { this.state.stringFilter} 
                                eventBuscar = {this.onBuscar} 
                                eventChangeOrderBy = {this.onChangeOrderBy} 
                              /> 
                            ) 
                            :
                            ( <h2>No se encontraron resultados</h2> )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    const item = state.accountHomeFetchDataSuccess;

    return {
        user,
        item
    };
}

const BuscarConsultoraPage = connect(mapStateToProps)(BuscarConsultora);

export default BuscarConsultoraPage;
