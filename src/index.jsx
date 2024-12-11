import { createRoot } from 'react-dom/client'; 
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './style.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
    <App />
  </Router>
  </StrictMode>
); 

