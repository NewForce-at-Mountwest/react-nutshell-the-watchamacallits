import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nutshell from './components/Nutshell';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
   <Router>
    <Nutshell />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


