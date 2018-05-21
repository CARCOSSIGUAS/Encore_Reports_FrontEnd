import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { I18nextProvider } from 'react-i18next';


import i18n from './i18n';



import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(<I18nextProvider i18n={i18n()}><Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider></I18nextProvider>, document.getElementById('root'))
registerServiceWorker();
