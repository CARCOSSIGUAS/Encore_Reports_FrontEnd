import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import LocizeBackend from 'i18next-locize-backend';
import whichBackend from './whichBackend';

import React, { Component } from 'react';
import DataLocalStorage from "./components/translate/dataTranslations.js";

class Data extends Component {
  constructor(props){
  super(props)
  }
}

const data = localStorage.getItem("key");
const options = {
  fallbackLng: 'en',

  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, 

  interpolation: {
    escapeValue: false,
    formatSeparator: ','
  },

  react: {
    wait: true
  },

  //debug:true
};

switch (whichBackend()) {

  case 'locize':
    options.backend = {
      projectId: '9fa57726-b7a6-4d1c-bbf6-37629309e4c5', // <-- replace with your projectId
      apiKey: 'your apiKey',
      referenceLng: 'en'
    };
    i18n.use(LocizeBackend);
    break;

  case 'xhr':
    options.resources =
      JSON.parse(data);
    i18n.use(XHR);
    break;

  case 'memory':
  default:
    options.resources = 
    JSON.parse(data);
 }

export default () => {
  i18n
    .use(LanguageDetector)
    .init(options);
  return i18n;
};
