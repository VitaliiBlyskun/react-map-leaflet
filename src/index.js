import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import '../src/components/App.css'


ReactDOM.createRoot(document.getElementById('map')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
