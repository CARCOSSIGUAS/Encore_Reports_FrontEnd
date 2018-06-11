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
    var langItem="";

    this.changeTextLng = this.changeTextLng.bind(this);
    
    if (localStorage.getItem("languageItem")!="" ||localStorage.getItem("languageItem")!=null) {
      langItem = localStorage.getItem("languageItem"); 
      this.state = {
        lang: langItem
      }
    }else{
      this.state = {
        lang: "ENGLISH"
      }
    }
  }

  changeTextLng (e) {
    this.setState({
      lang:  e.target.name,
    })
    localStorage.setItem("languageItem", (e.target.name))
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
            <Nav pullRight>
              <div hidden={true}> <DataLocalStorage value="1"/></div>
              <NavDropdown title={this.state.lang} id="basic-nav-dropdown">
                <MenuItem onClick={(e) => {changeLanguage('en'); this.changeTextLng(e)}} name={t('ENGLISH')}>ENGLISH</MenuItem>
                <MenuItem onClick={(e) => {changeLanguage('es'); this.changeTextLng(e)}} name={t('SPANISH')}>SPANISH</MenuItem>
                <MenuItem onClick={(e) => {changeLanguage('po'); this.changeTextLng(e)}} name={t('PORTUGUES')}>PORTUGUES</MenuItem>
              </NavDropdown>
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