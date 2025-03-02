import React from 'react';
import './home.css';
import './App.css'
import './components/recipe/recipe.styles.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App';
import { Navbar } from './components/Navbar/Navbar';


export default function Home() {

  return (


    <div>
      <Navbar />
      <div className='container'>

        <Router>
          <Switch>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </Router>

      </div>

    </div>




  );
}