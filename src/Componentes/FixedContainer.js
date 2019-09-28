import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../estilos/FixedContainerStyles.css';
import Homepage from './Homepage';
import Tareas from './Tareas';
import Contacto from './Contacto';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="Traca" fixed maxWidth="xl">
      <Switch>
            <Route className="POLO" path="/homepage" component={Homepage}/> 
            <Route path="/tareas" component={Tareas} />
            <Route path="/contacto" component={Contacto} />
      </Switch>
      </Container>
    </React.Fragment>
  );
}