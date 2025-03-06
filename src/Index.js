import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 introduced the new root API
import './index.css'; // You can use this for global CSS styles
import App from './components/App'; // Import the App component
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element for rendering

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);