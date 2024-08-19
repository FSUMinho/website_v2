import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './i18n_config.js'
import emailjs from '@emailjs/browser';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/website_v2">
       <App />
    </BrowserRouter>
  </React.StrictMode>,
);
