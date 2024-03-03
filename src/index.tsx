import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './Home/Home.css';
import { App } from './App';
import { Helmet } from 'react-helmet';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel='preload' as='Monserrat' href='static/Roman-Morrissey-DEMO.ttf.woff' type='font/woff' crossOrigin='anonymous'/>
    </Helmet>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
