import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/Context';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <AppProvider> */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* </AppProvider> */}
  </BrowserRouter>

  // </React.StrictMode>
);
