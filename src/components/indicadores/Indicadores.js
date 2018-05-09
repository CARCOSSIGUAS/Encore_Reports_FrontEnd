import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ConsultorHeader from '../../components/header/ConsultorHeader';
import './Indicadores.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Container from '../../components/container/Container';

class Indicadores extends Component {
  constructor(props) {
    super(props)

    const { user } = this.props;

    this.state = {
      indicadorVentaNeta: {
        falta: 9364686,
        meta: 35096392,
        vas: 25731706
      },
      codConsultor: user.accountID,
      periodId: 201804,
      items: [{}]
    };
  }

  componentDidMount() {
    fetch('http://datarequestqas.lbel.com.br/api/Report/GetPerformance_Header/?accountId=' + this.state.codConsultor + '&periodId=' + this.state.periodId)
      .then((response) => {
        return response.json()
      })
      .then((items) => {
        var rpt = items != null && items.length > 0 ? items : null;
        items = rpt;
        this.setState({ items })
      });
  }

  render() {

    const {
      indicadorVentaNeta, items
    } = this.state;

    return (

      <section>
        <ConsultorHeader />
        <div className="container">
          <div className="content-main">
            <div className="row">
              <div role="tabpanel" className="indicadores">
                <div className="col-xs-16 col-sm-8 col-sm-offset-1">
                  <div className="section-title-icon-content">
                    <h2 className="section-title-icon">FAÇA SEGUIMIENTO</h2>
                    <span id="indicadores-breadcrumb" className="text-info mt-5"></span>
                  </div>
                </div>
                <div className="col-md-offset-5 col-md-6">
                  <div className="text-right mb-20 mt-10">
                    <ul className="material-tabs tabHome" role="tablist">
                      <li role="presentation" className="active liTabHome">
                        <a className="active" id="lnk-indicadores" href="#tab-indicadores" data-select="tab-indicadores" role="tab" data-toggle="tab">Resultados</a>
                      </li>
                      <li role="presentation" className="liTabHome">
                        <a id="lnk-resumen" href="#tab-resumen" data-select="tab-resumen" role="tab" data-toggle="tab">Resumo</a>
                      </li>
                      <li role="presentation" className="liTabHome datareport-mobile">
                        <a id="lnk-datareport" className="letterLong200" href="#tab-datareport" data-select="tab-datareport" role="tab" data-toggle="tab">Descargas</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content">
                  <div className="tab-pane active" role="tabpanel" id="tab-indicadores">
                    <div className="col-sm-12">
                      <div className="col-lg-3 col-md-4 col-xs-12">
                        {/* <Link to={`/ventaneta`} > */}
                        <div className="box-data box-yellow">
                          <h3 className="box-data-title"><a className="box-data-title">DESEMPENHO</a> </h3>
                          <div className="box-content" id="VentaNetaDetalle">
                            <div className="box-icon"><FontAwesomeIcon icon="chart-area" /></div>
                            <div className="box-data-content">
                              <div id="VentaNetaFacturacionBox">
                                <div className="box-text-md-encore">
                                  <span className="VentaFaltanteVN stl-ind">VP:  {items != null ? items[0].vp : 0}</span>
                                </div>
                                <div className="box-text-md-encore">
                                  <span className="box-text-sm">
                                    <span className="VentasRestanteVN">VO-T: {items != null ? items[0].voq : 0}</span>
                                  </span>
                                </div>
                                <div className="box-text-md-encore">
                                  <span className="box-text-sm">
                                    <span className="VentasRestanteVN">VO-Q: {items != null ? items[0].vot : 0}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* </Link> */}
                      </div>
                      <div className="col-lg-3 col-md-4 col-xs-12">
                        <div className="box-data box-blue">
                          <h3 className="box-data-title"> <a className="box-data-title">BONIFICAÇAO</a> </h3>
                          <div className="box-content" id="VentaNetaDetalle">
                          <div className="box-icon"><FontAwesomeIcon icon="dollar-sign" /></div>
                            <div className="box-data-content">

                              <div id="VentaNetaFacturacionBox">
                                <span className="VentaFaltanteVN stl-ind"></span>
                                <div className="box-text-md">
                                  <span>
                                    <span className="MonedaVN32 stl-min"></span>
                                  </span>
                                  <span className="box-text-sm">
                                    <span className="VentasRestanteVN"></span>
                                  </span>
                                </div>
                                <span className="VentaMetaVN"></span>
                                <span className="VentasFdVVN3q1"></span>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-xs-12">
                        <div className="box-data box-success">
                          <h3 className="box-data-title"> <a className="box-data-title">NOVAS</a> </h3>
                          <div className="box-content" id="VentaNetaDetalle">
                          <div className="box-icon"><FontAwesomeIcon icon="user-plus" /></div>
                            <div className="box-data-content">
                              <div id="VentaNetaFacturacionBox">
                                <span className="VentaFaltanteVN stl-ind"></span>
                                <div className="box-text-md">
                                  <span>
                                    <span className="MonedaVN32 stl-min"></span>
                                  </span>
                                  <span className="box-text-sm">
                                    <span className="VentasRestanteVN"></span>
                                  </span>
                                </div>
                                <span className="VentaMetaVN"></span>
                                <span className="VentasFdVVN3q1"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="col-sm-offset-8 col-sm-3">
                        <div className="margin-top-10">
                          <div className="text-right mt-30">
                            <span className="UltimaActualizacion"> Ultima Actualizaçao 03/04 a las 2:30am</span>
                            <span className="UltimaActualizacionDetalle"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div >
          </div >
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return {
    user
  };
}

const IndicadoresPage = connect(mapStateToProps)(Indicadores);

export default IndicadoresPage;
