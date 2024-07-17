import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'; // Ensure CSS is being imported

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This ID must match the one in your index.html
);
