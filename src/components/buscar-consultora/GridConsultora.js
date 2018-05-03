import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GridConsultora.css';
import PaginationConsultora from '../../components/buscar-consultora/PaginationConsultora'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
class GridConsultora extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeInformationAccount: ''
        }

        this.activaPanelAccount = this.activaPanelAccount.bind(this);
        this.exportAccounts = this.exportAccounts.bind(this);


    }

    exportAccounts(event) {
        var filter = this.props.filters;
        let params = "CodConsultoraLogged=" + filter.CodConsultoraLogged +
            "&CodConsultoraSearched=" + filter.CodConsultoraSearched +
            "&NombreConsultora=" + filter.NombreConsultora +
            "&CodPatrocinador=" + filter.CodPatrocinador +
            "&NombrePatrocinador=" + filter.NombrePatrocinador +
            "&Period=" + filter.Period +
            "&Nivel=" + filter.Nivel +
            "&Generation=" + filter.Generation +
            "&TituloCarrera=" + filter.TituloCarrera +
            "&Estado=" + filter.Estado +
            "&NumeroPagina=" + filter.NumeroPagina +
            "&NumeroRegistros=" + filter.NumeroRegistros;

        window.location.href = 'http://datarequestqas.lbel.com.br/api/report/exportexcel/?' + params;

    }


    activaPanelAccount(event) {
        debugger;
        const target = event.target;
        let name = target.id;
        name = this.state.activeInformationAccount == name ? "" : name;
        this.setState({
            activeInformationAccount: name
        })

    }

    render() {
        const consultorasList = this.props.data.accountsInformationDTO == null ? "" : this.props.data.accountsInformationDTO.map((item, index) => {
            return <div className="content-collapse-item upper">
                <div className="collapse-head" role="tab">
                    <a className="tituloConsultoraMargin" >
                        <FontAwesomeIcon icon="plus-circle" />
                        <span className=" change-icon">
                            <i className="icon-plus-circled"></i>
                        </span>
                        <span className="upper tituloConsultoraMargin" id={"account" + index} onClick={this.activaPanelAccount}>
                            {item.accountName}
                        </span>
                    </a>
                    <br />
                    <span> <b>{index + 1}</b></span>
                    <div className="collapse-resumen">
                        <div className="row">
                            <div className="col-sm-10 col-md-4 col-lg-4 line-left">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <div>CÓDIGO: <b>{item.accountID}</b></div>
                                        <div>DATA ANIVERSARIO: <b>{item.enrollmentDateUTC}</b></div>
                                        <div>ESTADO: <b>{item.state}</b></div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div>NIVEL: <b className="tnormal">{item.level}</b></div>
                                        <div>GERAÇAO: <b>{item.generation}</b></div>
                                        <div>STATUS: <b>{item.activity}</b></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 line-left">
                                <div>VO: <b className="tnormal"></b></div>
                                <div>VO-T: <b>{item.pqv}</b></div>
                                <div>VO-Q: <b>{item.dqvt}</b></div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 line-left">
                                <div>TIT CARRERA: <b>{item.careerTitle_Des}</b></div>
                                <div>PERMANENCIA: <b className="tnormal"></b></div>
                                <div>TIT,PAGO: <b className="tnormal">{item.paidAsCurrentMonth_Des}</b></div>
                            </div>
                        </div>
                        <br />
                    </div>

                    <div className={this.state.activeInformationAccount == "account" + index ? "active-accountDetal" : "inactive-accountDetal"} role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" >
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div>CÓD. PATROCINADOR: <b>{item.sponsorID}</b></div>
                                <div>NOMBRE: <b>{item.sponsorName}</b></div>
                                <div>EMAIL: <b></b></div>
                                <div>TELÉFONO: <b></b></div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <div>CÓD. LIDER: <b></b></div>
                                <div>NOMBRE: <b></b></div>
                                <div>EMAIL: <b></b></div>
                                <div>TELÉFONO: <b></b></div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div>CONSULTORES ACTIVO: <b>NO</b></div>
                                <div>LÍDERES 1A GEN: <b>NO</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        });

        return (<div className="content-results">
            <div className="tab-head">
                <div className="col-sm-12">
                    <div className="col-sm-3 col-md-2">
                        <div className="files-export text-center">
                            <a onClick={this.exportAccounts} className="icon-file-export _pointer hidden-xs excel"><FontAwesomeIcon icon="file-excel" /></a>
                        </div>
                    </div>
                    <div className="col-offset-md-2 col-sm-13 col-md-5">
                        <div className="upper mt-15 text-md text-center">
                            <div className="upper mt-15 text-sm text-center">
                                <b> 1 - {this.props.filters.NumeroRegistros}</b> de <b>{this.props.data != null ? this.props.data.numPage : 0} </b>Consultoras
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-16 col-md-5">
                        <div className="order-by-content">
                            Ordenar por:
                                <select className="form-control input-sm">
                                <option value="1">Nome, Sobrenome</option>
                                <option value="2">Sobrenome, Nome</option>
                                <option value="3">Nome Consultor</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div id="detalle">
                <div className="col-md-12">
                    <div role="tabpanel" className="collapse-group accordion">
                        {consultorasList}
                    </div>
                </div>
            </div>
            {/* <PaginationConsultora data={this.props.data.accountsInformationDTO} filters= {this.props.filters} eventBuscar={this.props.eventBuscar} cantReg = {this.props.cantReg}/> */}
        </div>);
    }

}

export default GridConsultora;