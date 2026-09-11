import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { globalStyles } from './styles/globalStyles.js';
import { Global } from '@emotion/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <App />
  </StrictMode>,
);
