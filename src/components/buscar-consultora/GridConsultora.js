import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GridConsultora.css';


import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
class GridConsultora extends Component {
    // se puede omitir el constructor en este caso
    constructor(props) {
        super(props);
    }

    render() {
        const consultorasList = this.props.data.accountsInformationDTO == null ? "" : this.props.data.accountsInformationDTO.map((item,index) => {
            return <div className="content-collapse-item upper">
                <div className="collapse-head" role="tab">
                    <a data-toggle="collapse" data-parent="#accordion-box-detalle" aria-expanded="true" aria-controls="1" className="tituloConsultoraMargin" data-target={".navigation-primary-" + item.accountNumber}>
                        <FontAwesomeIcon icon="plus-circle" />
                        <span className=" change-icon">
                            <i className="icon-plus-circled"></i>
                        </span>
                        <span className="upper tituloConsultoraMargin">
                            {item.firstName} {item.middleName} {item.lastName}
                        </span>
                    </a>
                    <br />
                    <span className="num-collapse"> <b>{index + 1}</b></span>
                    <div className="collapse-resumen">
                        <div className="row">
                            <div className="col-sm-10 col-md-4 col-lg-4 line-left">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <div>CÓDIGO: <b>{item.accountID}</b></div>
                                        <div>CUMPLEAÑOS: <b>{item.enrollmentDateUTC}</b></div>
                                        <div>ESTADO: <b>{item.state}</b></div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div>NIVEL: <b className="tnormal">{item.level}</b></div>
                                        <div>GENERACIÓN: <b>{item.generation}</b></div>
                                        <div>STATUS: <b>{item.activity}</b></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 line-left">
                                <div>VENTA PERSONAL: <b className="tnormal"></b></div>
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

                    <div className={"collapse-body collapse navigation-primary-" + item.accountNumber} role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" >
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
                            <a className="icon-file-export _pointer hidden-xs excel"><FontAwesomeIcon icon="file-excel" /></a>
                        </div>
                    </div>
                    <div className="col-sm-13 col-md-5">
                        <div className="upper mt-15 text-md text-center">
                            <div className="upper mt-15 text-sm text-center">
                                <b> 1 - 15</b> de <b>{this.props.data != null ? this.props.data.numPage : 0} </b>Consultoras
                                </div>
                        </div>
                    </div>
                    <div className="col-sm-16 col-md-5">
                        <div className="order-by-content">
                            Ordenar por:
                                <select className="form-control input-sm">
                                <option value="1">Nombre, Apellido</option>
                                <option value="2">Apellido, Nombre</option>
                                <option value="3">Saldo / Nombre Consultora</option>
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
            <div id="contentPaginacion" className={this.props.data.accountsInformationDTO == null ? "float-pagination-left hidden-pagination" : "float-pagination-left visible-pagination"}>
                <nav>
                    <ul id="pagBuscarConsultora" paginaactual="1" cantregistros="7929" className="pagination pagination-sm">
                        <li className="active"><a className="_pointer" title="Current page is 1">1</a></li>
                        <li><a className="_pointer" title="Go to page 2">2</a></li>
                        <li><a className="_pointer" title="Go to page 3">3</a></li>
                        <li><a className="_pointer" title="Go to page 4">4</a></li>
                        <li><a className="_pointer" title="Go to page 5">5</a></li>
                        <li><a className="_pointer" title="Go to next page">&gt;</a></li>
                        <li><a className="_pointer" title="Go to last page">&gt;&gt;</a></li>
                    </ul>
                </nav>
            </div>
        </div>);
    }

}

export default GridConsultora;
