import React from 'react';
import Minavbar from './Minavbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Homepage from './Componentes/Homepage';
import Tareas from './Componentes/Tareas';
import Contacto from './Componentes/Contacto';
import Cursos from './Componentes/Cursos';



class App extends React.Component {
  render() {
    return (
      <Router>
          <Minavbar className="navbar"/>
          <Switch>
            <Route path="/Homepage" component={Homepage}/> 
            <Route path="/tareas" component={Tareas} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/cursos" component={Cursos} />
          </Switch>
      </Router>
    );
  }
}
 
export default App;