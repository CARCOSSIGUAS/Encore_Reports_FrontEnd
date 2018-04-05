import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Indicadores.css';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

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
      periodId: 201802,
      items: [{}]
    };
  }

  componentDidMount() {
    fetch('http://10.12.9.83/api/Report/GetPerformance_Header/?accountId=' + this.state.codConsultor + '&periodId=' + this.state.periodId)
      .then((response) => {
        return response.json()
      })
      .then((items)=>{
        this.setState({ items })
      });
  }

  render() {

    const {
      indicadorVentaNeta, items
    } = this.state;

    return (
      <div role="tabpanel" class="indicadores">
        <div class="row">
          <div class="container">
            <div class="row tuto">
            </div>
          </div>
          <div class="col-xs-16 col-sm-8 col-sm-offset-1">
            <div class="section-title-icon-content">
              <h2 class="section-title-icon">REVISA Y PONTE AL DÍA </h2>
              <span id="indicadores-breadcrumb" class="text-info mt-5"></span>
            </div>
          </div>
          <div class="col-xs-16 ">
            <div class="text-right mb-20 mt-10">

              <ul class="material-tabs tabHome" role="tablist">
                <li role="presentation" class="active liTabHome">
                  <a class="active" id="lnk-indicadores" href="#tab-indicadores" data-select="tab-indicadores" role="tab" data-toggle="tab">Indicadores</a>
                </li>
                <li role="presentation" class="liTabHome">
                  <a id="lnk-resumen" href="#tab-resumen" data-select="tab-resumen" role="tab" data-toggle="tab">Resumen</a>
                </li>
                <li role="presentation" class="liTabHome datareport-mobile">
                  <a id="lnk-datareport" class="letterLong200" href="#tab-datareport" data-select="tab-datareport" role="tab" data-toggle="tab">Reportes de Cierre</a>
                </li>
                <li role="presentation" class="liTabHome">
                  <a id="lnk-ipunicoreport" class="_pointer" data-select="tab-ipunicoreport" role="tab" data-toggle="tab">Digital</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane active" role="tabpanel" id="tab-indicadores">
            <div id="div-contenido-indicadores">
              <div class="col-sm-12">
                <div class="col-sm-3">
                  <Link to={`/ventaneta`} >
                    <div className="col-lg-3 col-md-4 col-xs-8 tour-home-box-ventaneta">
                      <div className="box-data box-yellow">
                        <h3> <a className="box-data-title">DESEMPENHO</a> </h3>
                        <div className="box-content" id="VentaNetaDetalle">
                          <div className="box-icon"><i className="icon-actividad"></i></div>
                          <div className="box-data-content">

                            <div id="VentaNetaFacturacionBox">
                              <span className="VentaFaltanteVN stl-ind">VP: {items[0].vp}</span>
                              <div className="box-text-md">
                                <span>
                                  <span className="MonedaVN32 stl-min">VO-T:</span>
                                </span>
                                <span className="box-text-sm">
                                  <span className="VentasRestanteVN">{items[0].vot}</span>
                                </span>
                              </div>
                              <span className="VentaMetaVN">VO-Q:</span>
                              <span className="VentasFdVVN3q1">{items[0].voq}</span>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div class="col-sm-3">
                  <div className="col-lg-3 col-md-4 col-xs-8 tour-home-box-ventaneta">
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
                </div>
                <div class="col-sm-3">
                  <div className="col-lg-3 col-md-4 col-xs-8 tour-home-box-ventaneta">
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
                  </div>
                </div>
                <div className="col-sm-offset-8 col-sm-3">
                  <div className="margin-top-10">
                    <div class="text-right mt-30">
                      <span class="UltimaActualizacion">Actualizado el 03/04 a las 2:30am</span>
                      <span class="UltimaActualizacionDetalle"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Indicadores;
