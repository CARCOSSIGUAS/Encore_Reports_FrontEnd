import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-11 col-sm-11 col-lg-11 col-sm-offset-1">
                            <div className="row">
                                <div id="content_nuestros_portales" className="col-sm-4 col-xs-12">
                                    <h3>Nuestros Portales</h3>
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Somos Belcorp" id="lnk-foo-ingresa-tu-pedido" href="http://www.somosbelcorp.com" target="_blank" rel="noopener noreferrer"> Somos Belcorp</a> <br />
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Únete Belcorp" id="lnk-foo-cerrar-sesion" href="http://www.uneteabelcorp.com/" target="_blank" rel="noopener noreferrer"> Únete Belcorp</a> <br />
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Comunidad Virtual" id="lnk-foo-comunidad-somos-belcorp" href="http://comunidad.somosbelcorp.com/" target="_blank" rel="noopener noreferrer"> Comunidad Virtual</a>
                                </div>
                                <div id="content_nuestras_marcas" className="col-sm-4 col-xs-12">
                                    <h3>Nuestras Marcas</h3>
                                    <a role="menu" region="Footer" parent="Nuestras marcas" title="L’bel" id="lnk-foo-lbel" href="https://www.lbel.com/br/" target="_blank"> L'Bel</a> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;