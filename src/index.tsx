import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Add the .tsx extension
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

