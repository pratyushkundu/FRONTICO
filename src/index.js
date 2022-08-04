import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
// import './index6.css'
// import App from './App7'

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>
);


reportWebVitals();
