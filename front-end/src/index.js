import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import MainProvider from './provider/MainProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <Router>
        <App />
      </Router>
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
