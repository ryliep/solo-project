import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

// TODO: import child components used in app
import Homepage from './Homepage.jsx';
import Log from './Log.jsx'

// TODO:  import styling

//create app HTML structure
class App extends Component {
  render() {
    return (
      <div className='router'>
        {/* <h1>Hello friend!</h1> */}
        <main>
          <Routes>
            <Route 
              exact path='/' element={<Homepage/>} 
            />
            <Route
              exact path='/log' element={<Log/>}
            />
          </Routes>
        </main>
        
      </div>
    );
  }
}

export default App;
