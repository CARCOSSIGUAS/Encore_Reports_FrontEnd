import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ConsultorHeader from '../../components/header/ConsultorHeader';
import './Indicadores.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Container from '../../components/container/Container';

class Indicadores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      indicadorVentaNeta: {
        falta: 9364686,
        meta: 35096392,
        vas: 25731706
      },
      codConsultor: 1697,
      periodId: 201803,
      items: [{}]
    };
  }

  componentDidMount() {
    fetch('http://10.12.9.83:3391/api/Report/GetPerformance_Header/?accountId=' + this.state.codConsultor + '&periodId=' + this.state.periodId)
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
                    <h2 className="section-title-icon">REVISA Y PONTE AL DÍA </h2>
                    <span id="indicadores-breadcrumb" className="text-info mt-5"></span>
                  </div>
                </div>
                <div className="col-md-offset-5 col-md-6">
                  <div className="text-right mb-20 mt-10">
                    <ul className="material-tabs tabHome" role="tablist">
                      <li role="presentation" className="active liTabHome">
                        <a className="active" id="lnk-indicadores" href="#tab-indicadores" data-select="tab-indicadores" role="tab" data-toggle="tab">Indicadores</a>
                      </li>
                      <li role="presentation" className="liTabHome">
                        <a id="lnk-resumen" href="#tab-resumen" data-select="tab-resumen" role="tab" data-toggle="tab">Resumen</a>
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
                            <h3> <a className="box-data-title">DESEMPENHO</a> </h3>
                            <div className="box-content" id="VentaNetaDetalle">
                              <div className="box-icon"><FontAwesomeIcon icon="chart-area" /></div>
                              <div className="box-data-content">
                                <div id="VentaNetaFacturacionBox">
                                  <div className="box-text-md-encore">
                                    <span className="VentaFaltanteVN stl-ind">VP:  {items != null ? items[0].vp : 0}</span>
                                  </div>
                                  <div className="box-text-md-encore">
                                    <span className="box-text-sm">
                                      <span className="VentasRestanteVN">VO-T: {items != null ? items[0].vot : 0}</span>
                                    </span>
                                  </div>
                                  <div className="box-text-md-encore">
                                    <span className="box-text-sm">
                                      <span className="VentasRestanteVN">VO-Q: {items != null ? items[0].voq : 0}</span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        {/* </Link> */}
                      </div>
                      {/* <div className="col-lg-3 col-md-4 col-xs-12">
                        <div className="box-data box-blue">
                          <h3> <a className="box-data-title">GANANCIAS</a> </h3>
                          <div className="box-content" id="VentaNetaDetalle">
                            <div className="box-icon"><i className="icon-actividad"></i></div>
                            <div className="box-data-content">

                              <div id="VentaNetaFacturacionBox">
                                <span className="VentaFaltanteVN stl-ind">VP: 1404</span>
                                <div className="box-text-md">
                                  <span>
                                    <span className="MonedaVN32 stl-min">VO-T:</span>
                                  </span>
                                  <span className="box-text-sm">
                                    <span className="VentasRestanteVN">{indicadorVentaNeta.falta}</span>
                                  </span>
                                </div>
                                <span className="VentaMetaVN">VO-Q:</span>
                                <span className="VentasFdVVN3q1">{indicadorVentaNeta.meta}</span>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-xs-12">
                        <div className="box-data box-success">
                          <h3> <a className="box-data-title">Nuevas</a> </h3>
                          <div className="box-content" id="VentaNetaDetalle">
                            <div className="box-icon"><i className="icon-actividad"></i></div>
                            <div className="box-data-content">
                              <div id="VentaNetaFacturacionBox">
                                <span className="VentaFaltanteVN stl-ind">VP: 1404</span>
                                <div className="box-text-md">
                                  <span>
                                    <span className="MonedaVN32 stl-min">VO-T:</span>
                                  </span>
                                  <span className="box-text-sm">
                                    <span className="VentasRestanteVN">{indicadorVentaNeta.falta}</span>
                                  </span>
                                </div>
                                <span className="VentaMetaVN">VO-Q:</span>
                                <span className="VentasFdVVN3q1">{indicadorVentaNeta.meta}</span>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-sm-12">
                      <div className="col-sm-offset-8 col-sm-3">
                        <div className="margin-top-10">
                          <div className="text-right mt-30">
                            <span className="UltimaActualizacion">Actualizado el 03/04 a las 2:30am</span>
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

export default Indicadores;
