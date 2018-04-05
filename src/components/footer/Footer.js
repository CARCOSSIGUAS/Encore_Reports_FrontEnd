import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer-page">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-16 col-sm-12 col-sm-offset-1">
                            <div class="row">
                                <div id="content_nuestros_portales" class="col-sm-4 hidden-xs">
                                    <h3>Nuestros Portales</h3>
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Somos Belcorp" id="lnk-foo-ingresa-tu-pedido" href="http://www.somosbelcorp.com" target="_blank"> Somos Belcorp</a> <br />
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Únete Belcorp" id="lnk-foo-cerrar-sesion" href="http://www.uneteabelcorp.com/" target="_blank"> Únete Belcorp</a> <br />
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Comunidad Virtual" id="lnk-foo-comunidad-somos-belcorp" href="http://comunidad.somosbelcorp.com/" target="_blank"> Comunidad Virtual</a>
                                </div>
                                <div id="content_nuestras_marcas" class="col-sm-4 hidden-xs">
                                    <h3>Nuestras Marcas</h3>
                                    <a role="menu" region="Footer" parent="Nuestras marcas" title="Ésika" id="lnk-foo-esika" href="http://www.esika.biz" target="_blank"> Ésika </a> <br />
                                    <a role="menu" region="Footer" parent="Nuestras marcas" title="L’bel" id="lnk-foo-lbel" href="http://www.lbel.com" target="_blank"> L'Bel</a> <br />
                                    <a role="menu" region="Footer" parent="Nuestras marcas" title="Cyzone" id="lnk-foo-cyzone" href="http://www.cyzone.com" target="_blank"> Cyzone</a>
                                </div>
                                <div class="col-xs-16 visible-xs">
                                    <div class="footer-tabs">
                                        <a class="footer-tab" role="button" data-toggle="collapse" href="#nuestros-portales" aria-expanded="false"> Nuestros Portales <span class="tab-icon-footer"><i class="icon-plus-bold"></i></span></a>
                                        <div class="collapse" id="nuestros-portales">
                                            <a role="menu" region="Footer" parent="Nuestros portales" title="Somos Belcorp" id="lnk-foo-ingresa-tu-pedido" href="http://www.somosbelcorp.com" target="_blank"> Somos Belcorp</a> <br />
                                            <a role="menu" region="Footer" parent="Nuestros portales" title="Únete Belcorp" id="lnk-foo-cerrar-sesion" href="http://www.uneteabelcorp.com/" target="_blank"> Únete Belcorp</a> <br />
                                            <a role="menu" region="Footer" parent="Nuestros portales" title="Comunidad Virtual" id="lnk-foo-comunidad-somos-belcorp" href="http://comunidad.somosbelcorp.com/" target="_blank"> Comunidad Virtual</a>
                                        </div>
                                        <a class="footer-tab" role="button" data-toggle="collapse" href="#nuestros-marcas" aria-expanded="false">Nuestras Marcas <span class="tab-icon-footer"><i class="icon-plus-bold"></i></span></a>
                                        <div class="collapse" id="nuestros-marcas">
                                            <a role="menu" region="Footer" parent="Nuestras marcas" title="Ésika" id="lnk-foo-esika" href="http://www.esika.biz" target="_blank"> Ésika </a> <br />
                                            <a role="menu" region="Footer" parent="Nuestras marcas" title="L’bel" id="lnk-foo-lbel" href="http://www.lbel.com" target="_blank"> L'Bel</a> <br />
                                            <a role="menu" region="Footer" parent="Nuestras marcas" title="Cyzone" id="lnk-foo-cyzone" href="http://www.cyzone.com" target="_blank"> Cyzone</a>
                                        </div>
                                        <div id="content_legal_movil"></div>

                                    </div>
                                </div>

                                <div class="col-xs-8 visible-xs">
                                    <img src="/images/footer-logo.png" alt="Belcorp" width="50" class="hidden" />
                                    <img src="/images/footer-logo.svg" alt="Belcorp" width="70" />
                                </div>
                                <div class="col-sm-4 col-xs-8">
                                    <h3 class="hidden-xs">Síguenos</h3>
                                    <div class="social-icons">
                                        <a role="menu"  class="fbClassIcon" region="Footer" parent="Síguenos" title="Facebook" id="lnk-foo-facebook" href="https://www.facebook.com/SomosBelcorpOficial" class="links-social" target="_blank">
                                            facebook
                                    <img role="menu" class="leftMargin" region="Footer" parent="Siguenos" title="Facebook" src={require("../../images/facebook_logo.png")} />
                                        </a><br />
                                        <a role="menu" region="Footer" parent="Síguenos" title="Youtube" id="lnk-foo-youtube" href="https://www.youtube.com/user/somosbelcorp" class="links-social" target="_blank">
                                            youtube
                                    <img role="menu" class="leftMargin"  region="Footer" parent="Siguenos" title="Youtube" src={require("../../images/youtube_logo.png")} />
                                        </a>
                                    </div>
                                </div>
                                <div id="content_legal">
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-16 col-sm-14 col-sm-offset-1">
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;