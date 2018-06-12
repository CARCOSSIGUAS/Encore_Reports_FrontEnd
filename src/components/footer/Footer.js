import React from 'react';
import './Footer.css';
import { translate, Trans } from 'react-i18next';

class Footer extends React.Component {
    render() {
        const { t, i18n } = this.props;

        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        }   
        return (
            <footer className="footer-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-11 col-sm-11 col-lg-11 col-sm-offset-1">
                            <div className="row">
                                <div id="content_nuestros_portales" className="col-sm-4 col-xs-12">
                                    <h3>{t('OurSites')}</h3>
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Escritorio Virtual" id="lnk-foo-ingresa-tu-pedido" href="https://consultor.lbel.com.br" target="_blank" rel="noopener noreferrer"> {t('LnkBackOffice')}</a> <br />
                                    <a role="menu" region="Footer" parent="Nuestros portales" title="Únete" id="lnk-foo-cerrar-sesion" href="https://meunegocio.lbel.com.br/" target="_blank" rel="noopener noreferrer">{t('LnkEnrollment')}</a> <br />
                                </div>
                                <div id="content_nuestras_marcas" className="col-sm-4 col-xs-12">
                                    <h3>{t('OurBrands')}</h3>
                                    <a role="menu" region="Footer" parent="Nuestras marcas" title="L’bel" id="lnk-foo-lbel" href="https://www.lbel.com/br/" target="_blank">{t('LnkLBel')}</a> <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default translate('translations')(Footer);