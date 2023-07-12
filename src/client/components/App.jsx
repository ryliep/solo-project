import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

// TODO: import child components used in app
// import MainContainer from "./containers/MainContainer.js";

// TODO:  import styling

//create app HTML structure
class App extends Component {
  render() {
    return (
      <div className='router'>
        <h1>Hello friend!</h1>
        {/* <main>
          <Switch>
            <Route 
              exactpath="/" component={MainContainer} 
            />
            add additional routes here
          </Switch>
        </main> */}
        
      </div>
    );
  }
}

export default App;
