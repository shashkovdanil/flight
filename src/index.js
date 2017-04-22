import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import { AppContainer } from 'react-hot-loader';

import App from './components/App';

import store from './store/configureStore';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <LocaleProvider locale={enUS}>
          <Component />
        </LocaleProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
