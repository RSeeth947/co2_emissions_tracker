import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Transportation from "./Pages/Transportation"
import Food from "./Pages/Food"
import Housing from "./Pages/Housing"
import Toolbar from './components/Toolbar';
import earth1 from './earth1.jpg';


function App() {
  return (
    <div className='App'>

      <h1 className='title'>Carbon Footprint Tracker</h1>
      <Toolbar className="start-button"/>

      <div className='content-container'>
        <div>
          <div className='text-1'> (1) This app serves the purpose of tracking carbon emmissions
            for an individual and producing their estimated carbon footprint.
          </div>
        </div>
        

        <div>
          <div className='text-2'>
            (2) The app asks about various components such as transportation, food habits, housing, 
            etc. to determine the individual's carbon footprint and displays all this data in a graph.
          </div>
        </div>
       
        <div>
          <div className='text-3'>
            (3) The last section will provide the user with strategies and individualized recommendations to improve their carbon footprint based on their personal data.
            It will also reiterate their lifestyle components that contribute to a better or lower carbon footprint.
          </div>
        </div>

        
        
        
      </div>  
      
      <img src={earth1} width='500' height='500' className='homepage-image' ></img>
    </div>
    

  );
}

export default App;



