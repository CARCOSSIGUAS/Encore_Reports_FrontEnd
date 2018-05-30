import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate, Trans } from 'react-i18next';
import DataLocalStorage from "./dataTranslations.js";
import i18n from 'i18next';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
class TranslateReact extends Component {
  constructor(props){
    super(props);
 }

    render(){
        const { t, i18n } = this.props;
        const changeLanguage = (lng) => {
          i18n.changeLanguage(lng);
        }

        let url = window.location.origin + '?backend=locize';

        if (document.location.href.indexOf('https://') === 0 && document.location.hostname.indexOf('hashbase.io') > 0) {
          url = window.location.origin + '?backend=xhr';
        }

        return (
            <Nav>
              <NavItem>
                <button onClick={() => changeLanguage('de')} className="btn btn-success btn-md">de</button>
              </NavItem>
              <NavItem>
                <button onClick={() => changeLanguage('en')} className="btn btn-info btn-md">en</button>
              </NavItem>
              <NavItem>
                <button onClick={() => changeLanguage('fr')} className="btn btn-warning btn-md">fr</button>
              </NavItem>
              {/* <div>{t('AnErrorHasOccurred')}</div>
              <div>{t('ErrorText')}</div>
              <div>{t('ReturnToHomePage')}</div>  */}
              <div hidden={true}> <DataLocalStorage value="1"/></div>
            </Nav>
              
            )
}}


function mapStateToProps(state) {
    const { user } = state.authentication;
    const item = state.accountHomeFetchDataSuccess;
    const hasErrored = state.accountHomeHasErrored;
    const isLoading = state.accountHomeIsLoading;

    return {
        user,
        item,
        hasErrored,
        isLoading
    };
}

const TranslateReactPage = connect(mapStateToProps)(TranslateReact);
export default translate('translations')(TranslateReactPage);