import React, { Component } from 'react';

class VentaNeta extends Component {

  constructor(props) {
    super(props)

    this.state = {
      indicadorVentaNeta: {
        falta: 9364686,
        meta: 35096392,
        vas: 25731706
      },
      items:[]
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(items => this.setState({ items }))
      ;
  }

  render() {
    const {
      indicadorVentaNeta, items
    } = this.state;

    const consultorasList = items.map((item) => {
      return <div key={item.id} className="content-collapse-item upper">
        <div className="collapse-head" role="tab">

          <br /><span className="upper">
            {item.name}
          </span>
          <span className="num-collapse"> <b>1</b></span>

          <div className="collapse-resumen">

            <div className="row">
              <div className="col-sm-10 col-md-7 col-lg-6 line-left">
                <div className="row">
                  <div className="col-xs-8">
                    <div>Código: <b>036251301</b></div>
                    <div>Telf. Casa: <b></b></div>
                  </div>
                  <div className="col-xs-8">
                    <div>Segmento: <b className="tnormal">Nuevas                                            </b></div>
                    <div>Celular: <b>{item.phone}</b></div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-md-5 col-lg-4 line-left">
                  <div>Constancia: <b className="tnormal">2 de 6</b></div>
                  <div>Venta Ganancia: <b>228.86</b></div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-md-5 col-lg-5 line-left">

                  <div>Saldo Pendiente: <b>240.80</b></div>
                  <div>Promedio Venta Consultora: <b className="tnormal">288.84</b></div>
                </div>
              </div>
            </div>

            <br />
            <div className="row hidden-sm hidden-xs" id="vntAltoValor1">
              <div className="col-sm-16 col-md-16 col-lg-16 line-left">
                <div className="title-altobajovalor"><b>Venta Consultora</b></div>
              </div>
              <div className="row text-altobajovalor">

                <div className="col-xs-2">
                  <div>
                    <span className="c1">C05</span>
                    <span className="EstadoAltoValor"></span>: <b className="bajovalor">241.00</b>
                  </div>
                </div>

                <div className="col-xs-2">
                  <div>
                    <span className="c2">C04</span>: <b className="bajovalor">336.68</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="row visible-sm visible-xs">
              <div className="col-sm-16 col-md-16 col-lg-16 line-left">
                <div className="title-altobajovalor" id="vntAltoValormovil1">
                  <b>Venta Consultora</b>
                </div>
              </div>
              <div className="row" id="vntAltoValormovil1">
                <div className="col-xs-7 col-lg-8 text-altobajovalor">
                  <div><span className="c1">C05</span>: <b className="bajovalor">241.00</b></div>

                  <div><span className="c2">C04</span>: <b className="bajovalor">336.68</b></div>

                </div>
                <div className="col-xs-7 col-lg-8 text-altobajovalor"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    });

    return (
      <div>
        <div className="col-xs-16 col-sm-14 col-xs-offset-0 col-sm-offset-1">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="col-lg-4 col-md-5 col-xs-8 tour-home-box-ventaneta">
                <div className="box-data box-yellow">
                  <h3> <a className="box-data-title">VENTA NETA</a> </h3>
                  <div className="box-content" id="VentaNetaDetalle">
                    <div className="box-icon"><i className="icon-caja-close"></i></div>
                    <div className="box-data-content">

                      <div id="VentaNetaFacturacionBox">
                        <span className="VentaFaltanteVN stl-ind">TE FALTAN</span>
                        <div className="box-text-md">
                          <span>
                            <span className="MonedaVN32 stl-min">S/.</span>
                          </span>
                          <span className="box-text-sm">
                            <span className="VentasRestanteVN">{indicadorVentaNeta.falta}</span>
                          </span>
                        </div>
                        <span className="VentaMetaVN">TU META ES</span>
                        <span className="MonedaVN32">S/.</span>
                        <span className="VentasFdVVN3q1">{indicadorVentaNeta.meta}</span>
                        <br />
                        <div>
                          <span className="vas">VAS</span> <span className="MonedaVN32">S/.</span>
                          <span className="VentasFdVSeccion">{indicadorVentaNeta.vas}</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lateral">
              <div className="col-lg-11 col-md-10 hidden-xs">

                <h5 className="text-right mt-40">A continuación podrás visualizar la venta neta de tu equipo.</h5>

                <div className="row">
                  <div className="col-xs-16">
                    <div className="text-right text-yellow box-detalle-head">
                      <div className="text-xlg mb-20">C05</div>
                      <div className="mt-15">VTA:</div>
                      <div className="mt-15">Pedidos:</div>
                      <div className="mt-15">Prom. Venta:</div>
                    </div>

                    <div className="table-controls" data-scroll="345" data-fortable="table-mobile-slide2">
                      <div className="table-left"><i className="icon-angle-left" data-fortable="table-2"></i></div>
                      <div className="table-right"><i className="icon-angle-right" data-fortable="table-2"></i></div>
                    </div>

                    <div className="box-detail-content-head">
                      <table className="table table-middle table-no-border mb-10">
                        <tbody>
                          <tr>
                            <td><a className="zone-circle zone-circle-title active nodo-base mt-0" nivel="Z">MI <br /> ZONA</a></td>
                          </tr>
                          <tr>
                            <td><span className="ml-10 zVTA">208,250</span></td>
                          </tr>
                          <tr>
                            <td><span className="ml-10 zPedidos">555</span></td>
                          </tr>
                          <tr>
                            <td><span className="ml-10 zProm">375</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="box-detail-content-head-content">
                      <div className="table-responsive table-scroll table-mobile-slide2">
                        <table className="table table-middle text-center table-no-border mb-10 table-2 tb-carrousel">
                          <tbody>
                            <tr>
                              <td>
                                <a className="zone-circle nodo " nivel="S" title="MERLY CRISTINA OROZCO ROJAS DE PORTELLA">A</a>
                              </td>
                              <td>
                                <a className="zone-circle nodo " nivel="S" title="PAOLA SALVO GIRON">B</a>
                              </td>
                              <td>
                                <a className="zone-circle nodo " nivel="S" title="ZOILA ANGELA HUAMAN CHAVEZ">C</a>
                              </td>
                              <td>
                                <a className="zone-circle nodo " nivel="S" title="HILDA ROSA RUIZ LLONTOP">D</a>
                              </td>
                              <td>
                                <a className="zone-circle nodo " nivel="S" title="SILVIA LILIANA TASAYCO DE ANCAJIMA">E</a>
                              </td>
                              <td>
                                <a className="zone-circle nodo " nivel="S" title="ISABEL IRIS CHUMBES LA ROSA SANCHEZ">F</a>
                              </td>
                              <td>
                                <a className="zone-circle nodo " nivel="S" title="FLOR DE MARIA DE MARIA WIDDUP ESPINOZA">G</a>
                              </td>
                              <td>
                                <a className="zone-circle nodo " nivel="S" title="KATHERINE DAYANA  AQUIJE AREVALO">H</a>
                              </td>
                            </tr>
                            <tr id="vta">
                              <td>15,413</td>
                              <td>34,443</td>
                              <td>23,043</td>
                              <td>19,168</td>
                              <td>19,681</td>
                              <td>31,277</td>
                              <td>55,529</td>
                              <td>9,697</td>
                            </tr>
                            <tr id="pedidos">
                              <td>49</td>
                              <td>94</td>
                              <td>82</td>
                              <td>70</td>
                              <td>66</td>
                              <td>84</td>
                              <td>75</td>
                              <td>35</td>
                            </tr>
                            <tr id="prom">
                              <td>314.5</td>
                              <td>366.4</td>
                              <td>281</td>
                              <td>273.8</td>
                              <td>298.2</td>
                              <td>372.3</td>
                              <td>740.4</td>
                              <td>277.1</td>
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

          <br />
          <div className="col-xs-16 col-sm-14 col-xs-offset-0 col-sm-offset-1 text-info text-right text-right-not-xs fs-13" id="ptv-breadcrumb">
            <span className="selector-BreadCrum text-info _pointer" nivelbread="P"></span>
            <span className="selector-BreadCrum text-info _pointer" nivelbread="R"></span>
            <span className="selector-BreadCrum text-info _pointer" nivelbread="Z"></span>
            <span className="selector-BreadCrum text-info" nivelbread="S"></span>
          </div>
          <div className="col-xs-16">
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="id-relation-tab">

                <div className="tab-head">
                  <div className="row">
                    <div role="tabpanel" className="collapse-group accordion">
                      {consultorasList}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VentaNeta;
