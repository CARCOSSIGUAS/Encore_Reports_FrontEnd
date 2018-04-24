import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-16 col-sm-12 col-sm-offset-1">
                            <div className="row">
                                <div id="content_nuestros_portales" className="col-sm-4 hidden-xs">
                                    <h3>Nuestros Portales</h3>
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Somos Belcorp" id="lnk-foo-ingresa-tu-pedido" href="http://www.somosbelcorp.com" target="_blank"> Somos Belcorp</a> <br />
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Únete Belcorp" id="lnk-foo-cerrar-sesion" href="http://www.uneteabelcorp.com/" target="_blank"> Únete Belcorp</a> <br />
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Comunidad Virtual" id="lnk-foo-comunidad-somos-belcorp" href="http://comunidad.somosbelcorp.com/" target="_blank"> Comunidad Virtual</a>
                                </div>
                                <div id="content_nuestras_marcas" className="col-sm-4 hidden-xs">
                                    <h3>Nuestras Marcas</h3>
                                    <a role="menu" region="Footer" parent="Nuestras marcas" title="L’bel" id="lnk-foo-lbel" href="https://www.lbel.com/br/" target="_blank"> L'Bel</a> <br />
                                </div>
                                <div className="col-xs-16 visible-xs">
                                    <div className="footer-tabs">
                                        <a className="footer-tab" role="button" data-toggle="collapse" href="#nuestros-portales" aria-expanded="false"> Nuestros Portales <span className="tab-icon-footer"><i className="icon-plus-bold"></i></span></a>
                                        <div className="collapse" id="nuestros-portales">
                                            <a role="menu" region="Footer" parent="Nuestros portales" title="Somos Belcorp" id="lnk-foo-ingresa-tu-pedido" href="http://www.somosbelcorp.com" target="_blank"> Somos Belcorp</a> <br />
                                            <a role="menu" region="Footer" parent="Nuestros portales" title="Únete Belcorp" id="lnk-foo-cerrar-sesion" href="http://www.uneteabelcorp.com/" target="_blank"> Únete Belcorp</a> <br />
                                            <a role="menu" region="Footer" parent="Nuestros portales" title="Comunidad Virtual" id="lnk-foo-comunidad-somos-belcorp" href="http://comunidad.somosbelcorp.com/" target="_blank"> Comunidad Virtual</a>
                                        </div>
                                        <a className="footer-tab" role="button" data-toggle="collapse" href="#nuestros-marcas" aria-expanded="false">Nuestras Marcas <span className="tab-icon-footer"><i className="icon-plus-bold"></i></span></a>
                                        <div className="collapse" id="nuestros-marcas">
                                            <a role="menu" region="Footer" parent="Nuestras marcas" title="L’bel" id="lnk-foo-lbel" href="https://www.lbel.com/br/" target="_blank"> L'Bel</a> <br />
                                        </div>
                                        <div id="content_legal_movil"></div>

                                    </div>
                                </div>

                                <div className="col-xs-8 visible-xs">
                                    <img src="/images/footer-logo.png" alt="Belcorp" width="50" className="hidden" />
                                    <img src="/images/footer-logo.svg" alt="Belcorp" width="70" />
                                </div>
                                <div className="col-sm-4 col-xs-8">
                                    <h3 className="hidden-xs">Síguenos</h3>
                                    <div className="social-icons">
                                        <a role="menu"  className="fbClassIcon" region="Footer" parent="Síguenos" title="Facebook" id="lnk-foo-facebook" href="https://www.facebook.com/SomosBelcorpOficial" className="links-social" target="_blank">
                                            facebook
                                    <img role="menu" className="leftMargin" region="Footer" parent="Siguenos" title="Facebook" src={require("../../images/facebook_logo.png")} />
                                        </a><br />
                                    </div>
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