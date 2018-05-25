import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translate, Trans } from 'react-i18next';
import DataLocalStorage from "./dataTranslations.js";

class TranslateReact extends Component {
  constructor(props){
    super(props);
    //var DataLocalStorage=null;

    //  if (localStorage.getItem("key")) {
    //   console.log("DataLocalStorage");
    //   DataLocalStorage = JSON.parse(localStorage.getItem("key")); 
    //   console.log(DataLocalStorage);
    // }

//     this.state = {
//       // items: [],
//       //TermTranslationsOptions: [],
//       hits: DataLocalStorage
//       }  
 }

  // componentDidMount() {
  //   fetch('http://localhost:31832/api/language/language/' + 1)
  //           .then((response) => {
  //               if (!response.ok) { 
  //                   return Promise.reject(response.statusText);
  //               }
  //               return response.json()
  //           })
  //           .then((results) => {
  //               this.setState({ 
  //                   TermTranslationsOptions: results,
  //               });
  //           });
  // }

  // componentDidMount() {
  //   fetch('http://localhost:31832/api/language/language/' + 1 )
  //           .then(response => response.json())
  //           .then(result => this.onSetResult(result));
  // }

  //   onSetResult = (result, key) => {  
  //     localStorage.setItem("key", JSON.stringify(result));
  //     this.setState({ hits: result });
  //     console.log(this.state.hits);
  //   }

    render(){
        const { t, i18n } = this.props;
        //const { hits } = this.state;
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
                <button onClick={() => changeLanguage('fr')}>fr</button>
              </div>
              <div className="App-intro">
                <Trans>
                  To get started, edit <code>src/App.js</code> and save to reload.
                </Trans>
              </div>
              <div style={{margin: 10}}><a href={url} style={{ textDecoration: 'none' }}>{t('advice', { url })}</a></div>
              <a href="https://github.com/i18next/react-i18next/tree/master/example/dat">GitHub</a>
              <div>{t('consultora')}</div>
              <div>{t('ingles')}</div>
              <div>{t('xhr')}</div>
              <label id="ErrorText"></label>
              {/* {this.state.TermTranslationsOptions.map((lang, index) => (
                  <p key={index}>{lang.term}!</p>
              ))} */}
              <DataLocalStorage value="1" name="ErrorText"/>
              {/* {
                hits &&
                hits.map(hit => 
                  <div key={hit.id}>
                  <label>{hit.termName}</label>
                  <br/>
                  <label>{hit.term}</label>
                  <input type="hidden" value={hit.id}></input>
                  <br/>  <br/>
                 
                  </div>
                //<div key={hit.id}>{hit.term}{hit.termName}{hit.LanguageId}</div>
              )
              } */}
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