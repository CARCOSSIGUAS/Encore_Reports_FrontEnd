import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import ConsultorHeader from '../../components/header/ConsultorHeader';
import { faCheckSquare, faCoffee, faPlusCircle } from '@fortawesome/fontawesome-free-solid'
import { PacmanLoader } from 'react-spinners';
import './VentaNeta.css';

fontawesome.library.add(faCheckSquare, faCoffee, faPlusCircle);

class VentaNeta extends Component {

  constructor(props) {
    super(props)

    this.state = {
      codConsultor: 1697,
      periodId: 201803,
      indicadorVentaNeta: [{}],
      items: [],
      loading: true,
      activaClass: 'active'
    };
  }

  componentDidMount() {
    fetch('http://10.12.9.169/api/Report/GetPerformance_Header/?accountId=' + this.state.codConsultor + '&periodId=' + this.state.periodId)
      .then((response) => {
        return response.json();
      })
      .then((indicadorVentaNeta) => {
        var rpt = indicadorVentaNeta != null && indicadorVentaNeta.length > 0 ? indicadorVentaNeta : null;
        indicadorVentaNeta = rpt;
        this.setState({ indicadorVentaNeta });
      });

    fetch('http://10.12.9.169/api/Report/GetPerformance_Detail/?accountId=' + this.state.codConsultor + '&periodId=' + this.state.periodId)
      .then((response) => {
        return response.json()
      })
      .then((items) => {
        this.setState({ activaClass: 'inactive', items: items });
      });
  }

  render() {
    const {
      indicadorVentaNeta, items
    } = this.state;

    const consultorasList = items.map((item) => {
      return <div className="content-collapse-item upper">
        <div className="collapse-head" role="tab">
          <a data-toggle="collapse" data-parent="#accordion-box-detalle" aria-expanded="true" aria-controls="1" className="tituloConsultoraMargin" data-target={".navigation-primary-" + item.codigo}>
            <FontAwesomeIcon icon="plus-circle" />
            <span className=" change-icon">
              <i className="icon-plus-circled"></i>
            </span>
            <span className="upper tituloConsultoraMargin">
              {item.consultorName}
            </span>
          </a>
          <br />
          <span className="num-collapse"> <b>1</b></span>
          <div className="collapse-resumen">
            <div className="row">
              <div className="col-sm-10 col-md-4 col-lg-4 line-left">
                <div className="row">
                  <div className="col-xs-6">
                    <div>CÓDIGO: <b>{item.codigo}</b></div>
                    <div>CUMPLEAÑOS: <b>{item.cumpleanio}</b></div>
                    <div>ESTADO: <b>{item.estado}</b></div>
                  </div>
                  <div className="col-xs-6">
                    <div>NIVEL: <b className="tnormal">{item.nivel}</b></div>
                    <div>GENERACIÓN: <b>{item.generacion}</b></div>
                    <div>STATUS: <b>{item.status}</b></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 line-left">
                <div>VENTA PERSONAL: <b className="tnormal">{item.ventaPersonal}</b></div>
                <div>VO-T: <b>{item.vot}</b></div>
                <div>VO-Q: <b>{item.voq}</b></div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 line-left">
                <div>TIT CARRERA: <b>{item.titCarrera}</b></div>
                <div>PERMANENCIA: <b className="tnormal">{item.permanencia}</b></div>
                <div>TIT,PAGO: <b className="tnormal">{item.titPago}</b></div>
              </div>
            </div>
            <br />
          </div>

          <div className={"collapse-body collapse navigation-primary-" + item.codigo} role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" >
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div>CÓD. PATROCINADOR: <b>{item.codPatrocinador}</b></div>
                <div>NOMBRE: <b>{item.nombrePatrocinador}</b></div>
                <div>EMAIL: <b>{item.emailPatrocinador}</b></div>
                <div>TELÉFONO: <b>{item.telefonoPatrocinador}</b></div>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <div>CÓD. LIDER: <b>{item.codLider}</b></div>
                <div>NOMBRE: <b>{item.nombreLider}  </b></div>
                <div>EMAIL: <b>{item.emailLider}</b></div>
                <div>TELÉFONO: <b>{item.telefonoLider}</b></div>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div>CONSULTORES ACTIVO: <b>{item.consultoresActivos}</b></div>
                <div>LÍDERES 1A GEN: <b>{item.cantidadEmpresariosGeneracion}</b></div>
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

    return (
      <section>
        <div className={'sweet-loading ' + this.state.activaClass}>
          <div className="loader-pacman">
            <PacmanLoader
              color={'rgb(189, 16, 224)'}
              loading={this.state.loading}
              className="loader-pacman"
            />
          </div>
        </div>
        <ConsultorHeader />
        <div className="container">
          <div className="content-main">
            <span className="icon-content-main"><i className="icon-dash-circled"></i></span>
            <div className="row">
              <div>
                <div className="col-xs-16 col-sm-14 col-xs-offset-0">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-md-offset-1">
                      <div className="box-data box-info box-in-details">
                        <div className="box-controls">
                          <a className="box-prev">
                            <FontAwesomeIcon icon="angle-left" />
                          </a>
                          <a className="box-next">
                            <FontAwesomeIcon icon="angle-right" />
                          </a>
                        </div>
                        <h3 className="box-data-title text-center text-lg">
                          <span id="lbl-titulo">ACTIVIDAD </span>
                        </h3>
                        <div className="box-content" id="VentaNetaDetalle">
                          <div className="box-icon"><i className="icon-caja-close"></i></div>
                          <div className="box-data-content">

                            <div id="VentaNetaFacturacionBox">
                              <div className="box-text-sm">
                                <span className="VentaFaltanteVN stl-ind">VP: {indicadorVentaNeta != null ? indicadorVentaNeta[0].vp : 0}</span>
                              </div>
                              <div className="box-text-md-encore">
                                <span className="box-text-sm">
                                  <span className="VentasRestanteVN">VO-T: {indicadorVentaNeta != null ? indicadorVentaNeta[0].vot : 0}</span>
                                </span>
                              </div>
                              <div className="box-text-md-encore">
                                <span className="box-text-sm">
                                  <span className="VentasRestanteVN">VO-Q: {indicadorVentaNeta != null ? indicadorVentaNeta[0].voq : 0}</span>
                                </span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7 col-md-10 hidden-xs">

                      <h5 className="text-right mt-40">A continuación podrás visualizar la venta neta de tu equipo.</h5>

                      <div className="row">
                        <div className="col-xs-16">
                          <div className="text-right text-info box-detalle-head">
                            <div className="text-xlg mb-30"><span id="lbl-campaniaactual">C05</span></div>
                            <div className="mt-10">Activas Finales</div>
                            <div className="mt-15">Actividad</div>
                          </div>
                          <div className="table-controls" data-scroll="345" data-fortable="table-mobile-slide2">
                            <div className="table-left"><FontAwesomeIcon icon="angle-left" /></div>
                            <div className="table-right"><FontAwesomeIcon icon="angle-right" /></div>
                          </div>
                          <div className="box-detail-content-head">
                            <table className="table table-middle table-no-border mb-10">
                              <tbody>
                                <tr>
                                  <td>
                                    <a className="zone-circle zone-circle-title active mt-0 nodoPadre">MI <br /> ZONA</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td><span className="ml-20 mt-10">906</span></td>
                                </tr>
                                <tr>
                                  <td><span className="ml-20 mt-10">88.2%</span></td>
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

                  <br />
                  <div className="col-xs-16 col-sm-14 col-xs-offset-0 col-sm-offset-1 text-info text-right text-right-not-xs fs-13" id="ptv-breadcrumb">
                    <span className="selector-BreadCrum text-info _pointer" nivelbread="P"></span>
                    <span className="selector-BreadCrum text-info _pointer" nivelbread="R"></span>
                    <span className="selector-BreadCrum text-info _pointer" nivelbread="Z"></span>
                    <span className="selector-BreadCrum text-info" nivelbread="S"></span>
                  </div>
                  <div className="col-xs-16">
                    <ul className="nav nav-pills nav-justified tab-info hidden-xs" role="tablist">
                      <li role="presentation" className="active">
                        <a href="#id-relation-tab" data-select="id-relation-tab" role="tab" data-toggle="tab" tipo="1">ACTIVAS</a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="id-relation-tab">

                        <div className="tab-head">
                          <div className="col-md-12">
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
            </div >
          </div >
        </div>
      </section>
    );
  }
}

export default VentaNeta;
