import React from 'react';

import ReactDOM from 'react-dom';
import './home.css';
import './App.css'
// import './index.css'
import './components/recipe/recipe.styles.css'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
//import { NavigationBar } from './components/Navigationbar';
import App from './App';
import { useState } from 'react';
import Homee from './components/Homee/Homee';




export default function Home() {

  const [theme, setTheme] = useState('light');
  const [buttonClicked, setButtonClicked] = useState(false);


  const handleClick = () => {
    // Update the state to indicate that the button has been clicked
    setButtonClicked(true);
  };

  return (


    <div>
      < Homee />
      <div className='container'>

        <Router>
          {/* {!buttonClicked && (
            <Link to='/app'><button className="newBtn" onClick={handleClick}>Let's get started</button></Link>

          )} */}
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

// export default Hello;