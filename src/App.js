import React from 'react';
import Minavbar from './Minavbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Homepage from './Homepage';
import Tareas from './Tareas';
import Contacto from './Contacto';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Minavbar></Minavbar>
 
          <Switch>
            <Route path="/homepage" component={Homepage}/> 
            <Route path="/tareas" component={Tareas} />
            <Route path="/contacto" component={Contacto} />
          </Switch>
 
         
        </div>
      </Router>
    );
  }
}
 
export default App;