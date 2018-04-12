import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GridConsultora.css';


import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
class GridConsultora extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const consultorasList = this.props.data.accountsInformationDTO == null ? "" : this.props.data.accountsInformationDTO.map((item) => {
            return <div key={item.id} className="content-collapse-item upper">
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
                    <span className="num-collapse"> <b>1</b></span>
                    <div className="collapse-resumen">
                        <div className="row">
                            <div className="col-sm-10 col-md-4 col-lg-4 line-left">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <div>CÓDIGO: <b>{item.accountID}</b></div>
                                        <div>CUMPLEAÑOS: <b>{item.enrollmentDateUTC}</b></div>
                                        <div>ESTADO: <b></b></div>
                                    </div>
                                    <div className="col-xs-6">
                                        <div>NIVEL: <b className="tnormal"></b></div>
                                        <div>GENERACIÓN: <b></b></div>
                                        <div>STATUS: <b></b></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 col-lg-3 line-left">
                                <div>VENTA PERSONAL: <b className="tnormal"></b></div>
                                <div>VO-T: <b></b></div>
                                <div>VO-Q: <b></b></div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-4 line-left">
                                <div>TIT CARRERA: <b></b></div>
                                <div>PERMANENCIA: <b className="tnormal"></b></div>
                                <div>TIT,PAGO: <b className="tnormal"></b></div>
                            </div>
                        </div>
                        <br />
                    </div>

                    <div className={"collapse-body collapse navigation-primary-" + item.accountNumber} role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" >
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div>CÓD. PATROCINADOR: <b></b></div>
                                <div>NOMBRE: <b></b></div>
                                <div>EMAIL: <b></b></div>
                                <div>TELÉFONO: <b></b></div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-3">
                                <div>CÓD. LIDER: <b>337</b></div>
                                <div>NOMBRE: <b> </b></div>
                                <div>EMAIL: <b></b></div>
                                <div>TELÉFONO: <b></b></div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <div>CONSULTORES ACTIVO: <b>NO</b></div>
                                <div>LÍDERES 1A GEN: <b>NO</b></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="box-detail-content-head-content-details">
                                    <div className="table-responsive table-scroll table-mobile-slide2">
                                        <table className="table table-middle text-center table-no-border mb-10 table-2 tb-carrousel">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <a className="zone-circle-details nodo " nivel="S" title="MERLY CRISTINA OROZCO ROJAS DE PORTELLA">A</a>
                                                    </td>
                                                    <td>
                                                        <a className="zone-circle-details nodo " nivel="S" title="PAOLA SALVO GIRON">B</a>
                                                    </td>
                                                    <td>
                                                        <a className="zone-circle-details nodo " nivel="S" title="ZOILA ANGELA HUAMAN CHAVEZ">C</a>
                                                    </td>
                                                    <td>
                                                        <a className="zone-circle-details nodo " nivel="S" title="HILDA ROSA RUIZ LLONTOP">D</a>
                                                    </td>
                                                    <td>
                                                        <a className="zone-circle-details nodo " nivel="S" title="SILVIA LILIANA TASAYCO DE ANCAJIMA">E</a>
                                                    </td>
                                                    <td>
                                                        <a className="zone-circle-details nodo " nivel="S" title="ISABEL IRIS CHUMBES LA ROSA SANCHEZ">F</a>
                                                    </td>
                                                    <td>
                                                        <a className="zone-circle-details nodo " nivel="S" title="FLOR DE MARIA DE MARIA WIDDUP ESPINOZA">G</a>
                                                    </td>
                                                    <td>
                                                        <a className="zone-circle-details nodo " nivel="S" title="KATHERINE DAYANA  AQUIJE AREVALO">H</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        });

        return (<div className="content-results">
            <div class="tab-head">
                <div class="col-sm-12">
                    <div class="col-sm-3 col-md-2">
                        <div class="files-export text-center">
                            <a class="icon-file-export _pointer hidden-xs excel"><FontAwesomeIcon icon="file-excel" /></a>
                        </div>
                    </div>
                    <div class="col-sm-13 col-md-5">
                        <div class="upper mt-15 text-md text-center">
                            <div class="upper mt-15 text-sm text-center">
                                <b> 1 - 15</b> de <b>{this.props.data != null ? this.props.data.numPage : 0} </b>Consultoras
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-16 col-md-5">
                        <div class="order-by-content">
                            Ordenar por:
                                <select class="form-control input-sm">
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
        </div>);
    }

}

export default GridConsultora;