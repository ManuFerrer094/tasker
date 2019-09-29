import React from "react";
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from "reactstrap";
import '../estilos/estiloBotones.css';
class Tareas extends React.Component {
  constructor() {
    super();
    this.state = {
      titulo : 'Hola',
      textoTarea : 'Esto es la descripción de la tarea número 1'
    }
  }
  handleChange = (e) =>{ 
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle>{this.state.titulo}</CardSubtitle>
          <CardText>{this.state.textoTarea}</CardText>
          <Button className="centrado">Comenzar</Button>
        </CardBody>
      </Card>
    </div>
    );
  }
}
 
export default Tareas;