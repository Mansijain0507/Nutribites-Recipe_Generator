import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import './App.css';
import App from './App';
// import './home.css';
import Home from './Home';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <Home />

    </React.StrictMode>
);