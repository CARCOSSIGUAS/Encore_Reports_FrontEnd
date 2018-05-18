import React, { Component } from 'react';
import moment from 'moment';

import ReactPaginate from 'react-paginate';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './GridConsultora.css';

function getFormat() {
    return 'DD-MM-YYYY';
}


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
        var filter = this.props.stringFilter;
        window.location.href = 'http://datarequestqas.lbel.com.br/api/reportaccount/exportexcel/?' + filter;
    }

    activaPanelAccount(event) {
        const target = event.target;
        let name = target.id;
        name = this.state.activeInformationAccount == name ? "" : name;
        this.setState({
            activeInformationAccount: name
        })
    }

    render() {
        const consultorasList = this.props.data == null ? "" : this.props.data.map((item, index) => {
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
                    <span> <b>{(index + 1) * this.props.filters.NumeroPagina}</b></span>
                    <div className="collapse-resumen">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xs-12 line-left">
                                <div className="row">
                                    <div className="col-md-12 col-xs-12">
                                        <div>CÓDIGO: <b>{item.accountID}</b></div>
                                        <div>DATA DE INGRESSO: <b>{moment(item.joinDate).format(getFormat())}</b></div>
                                        <div>TIT. CARRERA: <b>{item.careerTitle_Des}</b></div>
                                        <div>TIT. DESEMPENHO: <b>{item.paidAsCurrentMonth_Des}</b></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-5 col-xs-12 line-left">
                                <div>ENDEREÇO:   <b>{}  </b></div>
                                <div>EMAIL: <b className="work-break-grid">{item.emailAddress}</b></div>
                                <div>TELEFONE: <b>{}</b></div>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xs-12 line-left">
                                <div>VO:   <b>{item.pqv}  </b></div>
                                <div>VO-T: <b>{item.dqv}  </b></div>
                                <div>VO-Q: <b>{item.dqvt} </b></div>
                                <div>STATUS: <b>{item.activity}</b></div>
                            </div>
                        </div>
                        <br />
                    </div>

                    <div className={this.state.activeInformationAccount == "account" + index ? "active-accountDetal" : "inactive-accountDetal"} role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" >
                        <div className="collapse-resumen">
                            <div className="row">
                                <div className="col-sm-10 col-md-4 col-lg-5 line-left">
                                    <div className="row">
                                        <div className="col-md-12 col-xs-12">
                                            <div>CÓD. PATROCINADOR: <b>{item.sponsorID}</b></div>
                                            <div>NOME PATROCINADOR: <b>{item.sponsorName}</b></div>
                                            <div>EMAIL: <b>{}</b></div>
                                            <div>TELEFONE: <b>{}</b></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 col-lg-3 line-left">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        });

        return (<div className="content-results">
            <div className="col-sm-12 col-md-12 col-xs-12">
                <div className="col-sm-3 col-md-2 col-xs-12">
                    <div className="files-export text-center">
                        <a onClick={this.exportAccounts} className="icon-file-export _pointer excel"><FontAwesomeIcon icon="file-excel" /></a>
                    </div>
                </div>
                <div className="col-offset-md-2 col-sm-6 col-md-5 col-xs-12">
                    <div className="upper mt-15 text-md text-center">
                        <div className="upper mt-15 text-sm text-center">
                            <b> 1 - {this.props.paging.pageSize}</b> de <b>{this.props.paging != null ? this.props.paging.totalItems : 0} </b>Consultoras
                            </div>
                    </div>
                </div>
                <div className="col-sm-16 col-md-5 col-xs-12">
                    <div className="order-by-content">
                        Ordenar por: {' '}
                        <select name="OrderBy" className="form-control input-sm" onChange={this.props.eventChangeOrderBy} >
                            <option value="" selected="selected"> Seleccione </option>
                            <option value="1">Titulo Carreira</option>
                            <option value="2">Titulo Desempenho</option>
                            <option value="3">Volumen Personal</option>
                            <option value="4">Fecha de Ingreso</option>
                        </select>
                    </div>
                </div>
            </div>
            <hr />
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div role="tabpanel" className="collapse-group accordion">
                    {consultorasList}
                </div>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
                <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={this.props.paging.totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={this.props.eventBuscar}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>
        </div>);
    }
}

export default GridConsultora;