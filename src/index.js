import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AppContainer } from 'react-hot-loader'

// import ConfigStore from './ConfigStore'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}