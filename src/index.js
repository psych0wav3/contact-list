import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Global from './styles/Global'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <Global />
  </React.StrictMode>,
  document.getElementById('root')
);

