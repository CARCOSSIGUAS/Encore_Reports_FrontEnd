import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Indicadores extends Component {

  state = {
    indicadorVentaNeta: {
      falta: 9364686,
      meta: 35096392,
      vas: 25731706
    },
  };

  render() {

    const {
      indicadorVentaNeta,
    } = this.state;

    return (
      <div>
        <Link to={`/ventaneta`} >

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
                        <br/>
                        <div>
                            <span className="vas">VAS</span> <span className="MonedaVN32">S/.</span>
                            <span className="VentasFdVSeccion">{indicadorVentaNeta.vas}</span>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Indicadores;
