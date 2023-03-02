import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CarContextProvider } from './context/CarContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CarContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CarContextProvider>
);
