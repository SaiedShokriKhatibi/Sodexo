import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer from './app';
import store from 'src/store/reduxStore';
import { I18nextProvider } from 'react-i18next';
import i18n from './translation/i18n';
import register, { registerServiceWorker } from './registerServiceWorker';
import './theme/main.less';
import './theme/generated.less';
import {LanguageProvider} from "./multilingual/languageProvider";

/* Register PWA to browser */
register();

/* Register FCM ServiceWorker */
registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
      <LanguageProvider>
          <Router>
              <AppContainer />
          </Router>
      </LanguageProvider>
  </Provider>,
  document.getElementById('root')
);
