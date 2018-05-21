import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate, Trans } from 'react-i18next';


class TranslateReact extends Component {
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
            <div className="App">
              <div className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h2>{t('Welcome to React')}</h2>
                <button onClick={() => changeLanguage('de')}>de</button>
                <button onClick={() => changeLanguage('en')}>en</button>
              </div>
              <div className="App-intro">
                <Trans>
                  To get started, edit <code>src/App.js</code> and save to reload.
                </Trans>
              </div>
              <div style={{margin: 10}}><a href={url} style={{ textDecoration: 'none' }}>{t('advice', { url })}</a></div>
              <a href="https://github.com/i18next/react-i18next/tree/master/example/dat">GitHub</a>
            </div>
          );
      
    }
}

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
// export default TranslateReactPage;
export default translate('translations')(TranslateReactPage);