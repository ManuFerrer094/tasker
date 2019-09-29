import React from 'react';
import Minavbar from './Minavbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import FixedContainer from './Componentes/FixedContainer';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Minavbar></Minavbar>
          <FixedContainer></FixedContainer>
         
        </div>
      </Router>
    );
  }
}
 
export default App;