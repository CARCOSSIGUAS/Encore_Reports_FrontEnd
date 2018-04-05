import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faPlusCircle } from '@fortawesome/fontawesome-free-solid'
import './VentaNeta.css';

fontawesome.library.add(faCheckSquare, faCoffee, faPlusCircle);

class VentaNeta extends Component {

  constructor(props) {
    super(props)

    this.state = {
      indicadorVentaNeta: {
        falta: 9364686,
        meta: 35096392,
        vas: 25731706
      },
      items: [{
        consultorName: 'ANGELITA HAYDEE BARRETO ALEJANDRO',
        codigo: '043347780',
        segmento: 'NUEVAS',
        telefono: 5679800,
        celular: 948453894,
        constancia: '2 DE 6',
        saldoPendiente: 0,
        ventaGanancia: 310.76,
        promedioVentaConsultora: 359.95,
        ventaConsultora: {
          C06: 337.89,
          C05: 382.00
        },
        consultor: {
          docIdentidad: '0018179924',
          territorio: 337,
          familiaProtegida: 'NO',
          direccion: 'CAL. CALLE INDEPENDENCIA SIN NUMERO AA.HH PUENTE ENTRADA DE LA PRIMERO DE MAYO FRENTE A LA CONSULTORA MARGARITA GUEVARA CASA VERDE',
          campaniaIngreso: 201803,
          usaFlexipago: 'NO',
          ultimaFacturacion: 201805,
          esBrillante: 'NO',
          origenPedido: 'WEB',
          email: 'dummy@gmail.com',
          cumpleanios: '1 DE AGOSTO'
        }
      }, {
        consultorName: 'ABEL RENGIFO BURGOS',
        codigo: '043435094',
        segmento: 'NUEVAS',
        telefono: 5679800,
        celular: 948711520,
        constancia: '1 DE 6',
        saldoPendiente: 0,
        ventaGanancia: 318.58,
        promedioVentaConsultora: 391.00,
        ventaConsultora: {
          C06: 337.89,
          C05: null
        },
        consultor: {
          docIdentidad: '0042190499',
          territorio: 25483,
          familiaProtegida: 'NO',
          direccion: 'CAL. CARR. TAYABAMBA SN ANEXO RETAMAS CERCA AL PUENTE DONCELLA, LAS LAMAS',
          campaniaIngreso: 201805,
          usaFlexipago: 'NO',
          ultimaFacturacion: 201805,
          esBrillante: 'NO',
          origenPedido: 'WEB',
          email: 'NOTIENE@GMAIL.COM',
          cumpleanios: '29 DE MAYO'
        }
      }, {
        consultorName: 'ABIGAIL MARILIN RUIZ BALLENA',
        codigo: '042430617',
        segmento: 'INCONSTANTES',
        telefono: 5679800,
        celular: 991046402,
        constancia: '5 DE 6',
        saldoPendiente: 302.52,
        ventaGanancia: 296.84,
        promedioVentaConsultora: 272.22,
        ventaConsultora: {
          C06: 339.50,
          C05: 334.70,
          C04: 227.30,
          C03: 244.20,
          C02: 215.40,
          C01: 0
        },
        consultor: {
          docIdentidad: '0072752546',
          territorio: 58885,
          familiaProtegida: 'NO',
          direccion: 'JR. SUAREZ CDRA 14',
          campaniaIngreso: 201709,
          usaFlexipago: 'NO',
          ultimaFacturacion: 201805,
          esBrillante: 'NO',
          origenPedido: 'WEB',
          email: '',
          cumpleanios: '14 DE MAYO'
        }
      }, {
        consultorName: 'ADELINA GERMAN CASTILLO',
        codigo: '012892217',
        segmento: 'C3 - ASESORA DE BELLEZA',
        telefono: 5679800,
        celular: 999578439,
        constancia: '6 DE 6',
        saldoPendiente: 0.57,
        ventaGanancia: 477.36,
        promedioVentaConsultora: 403.67,
        ventaConsultora: {
          C06: 601.00,
          C05: 332.20,
          C04: 333.80,
          C03: 233.70,
          C02: 493.90,
          C01: 427.40
        },
        consultor: {
          docIdentidad: '0018082754',
          territorio: 363,
          familiaProtegida: 'NO',
          direccion: 'CAL. RAMON CASTILLA 480 ENTRANDO POR CALLE LIMA CERCA A LA TIENDA',
          campaniaIngreso: 200703,
          usaFlexipago: 'NO',
          ultimaFacturacion: 201805,
          esBrillante: 'NO',
          origenPedido: 'WEB',
          email: '',
          cumpleanios: '25 DE NOVIEMBRE'
        }
      }, {
        consultorName: 'ADRIANA ABIGAIL DOMINGUEZ MEDINA',
        codigo: '042904929',
        segmento: 'C2 - ESPECIALISTA DE BELLEZA',
        telefono: 5679800,
        celular: 991460171,
        constancia: '6 DE 6',
        saldoPendiente: 0,
        ventaGanancia: 630.50,
        promedioVentaConsultora: 480.36,
        ventaConsultora: {
          C06: 743.60,
          C05: 419.90,
          C04: 482.00,
          C03: 434.78,
          C02: 415.10,
          C01: 386.80
        },
        consultor: {
          docIdentidad: '0071199363',
          territorio: 363,
          familiaProtegida: 'NO',
          direccion: 'CAL. RAMON CASTILLA 480 ENTRANDO POR CALLE LIMA CERCA A LA TIENDA',
          campaniaIngreso: 200703,
          usaFlexipago: 'NO',
          ultimaFacturacion: 201805,
          esBrillante: 'NO',
          origenPedido: 'WEB',
          email: '',
          cumpleanios: '25 DE NOVIEMBRE'
        }
      }]
    };
  }

  componentDidMount() {
    // fetch('http://jsonplaceholder.typicode.com/users')
    //   .then(result => result.json())
    //   .then(items => this.setState({ items }))
    //   ;
  }

  render() {
    const {
      indicadorVentaNeta, items
    } = this.state;

    const consultorasList = items.map((item) => {
      return <div key={item.id} className="content-collapse-item upper">
        <div className="collapse-head" role="tab">
          <a data-toggle="collapse" data-parent="#accordion-box-detalle" aria-expanded="true" aria-controls="1" className="tituloConsultoraMargin" data-target={".navigation-primary-" + item.consultor.docIdentidad}>
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
                    <div>CUMPLEAÑOS: <b>{item.consultor.cumpleanios}</b></div>
                    <div>ESTADO: <b></b></div>
                  </div>
                  <div className="col-xs-6">
                    <div>NIVEL: <b className="tnormal">2</b></div>
                    <div>GENERACIÓN: <b>{item.phone}</b></div>
                    <div>STATUS: <b>{item.phone}</b></div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3 line-left">
                <div>VENTA PERSONAL: <b className="tnormal">2 de 6</b></div>
                <div>VO-T: <b>228.86</b></div>
                <div>VO-Q: <b>228.86</b></div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 line-left">
                <div>TIT CARRERA: <b>240.80</b></div>
                <div>PERMANENCIA: <b className="tnormal">288.84</b></div>
                <div>TIT,PAGO: <b className="tnormal">288.84</b></div>
              </div>
            </div>
            <br />
          </div>

          <div className={"collapse-body collapse navigation-primary-" + item.consultor.docIdentidad} role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" >
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4">
                <div>CÓD. PATROCINADOR: <b>0018179924</b></div>
                <div>NOMBRE: <b>CAL. CALLE INDEPENDENCIA SIN NUMERO AA.HH PUENTE  ENTRADA DE LA PRIMERO DE MAYO  FRENTE A LA CONSULTORA MARGARITA GUEVARA CASA VERDE</b></div>
                <div>EMAIL: <b></b></div>
                <div>TELÉFONO: <b>1 de Agosto</b></div>
              </div>
              <div className="col-sm-3 col-md-3 col-lg-3">
                <div>CÓD. LIDER: <b>337</b></div>
                <div>NOMBRE: <b>201803  </b></div>
                <div>EMAIL: <b>201805</b></div>
                <div>TELÉFONO: <b>Web</b></div>
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

    return (
      <div>
        <div className="col-xs-16 col-sm-14 col-xs-offset-0">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-md-offset-1">
              <div className="box-data box-info box-in-details">
                <div class="box-controls">
                  <a class="box-prev">
                    <FontAwesomeIcon icon="angle-left" />
                  </a>
                  <a class="box-next">
                    <FontAwesomeIcon icon="angle-right" />
                  </a>
                </div>
                <h3 class="box-data-title text-center text-lg">
                  <span id="lbl-titulo">ACTIVIDAD </span>
                </h3>
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
    );
  }
}

export default VentaNeta;
