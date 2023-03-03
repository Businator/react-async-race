import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CarContextProvider } from './context/CarContext';
import { PageContextProvider } from './context/PageContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PageContextProvider>
    <CarContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CarContextProvider>
  </PageContextProvider>
);
