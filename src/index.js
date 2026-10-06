import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/fonts.css';

// Initialize theme from the saved preference (defaults to light)
const theme = localStorage.getItem('adgrow-theme') || 'light';
document.documentElement.setAttribute('data-theme', theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
