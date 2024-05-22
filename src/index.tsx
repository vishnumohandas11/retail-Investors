import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import packageJson from '../package.json';
import { makeServer } from './__tests__/server';

makeServer();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
