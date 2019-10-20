import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from "reactstrap";

class Cursos extends React.Component{
    constructor() {
        super();
        this.state = {
          titulo : 'Este es el titulo del curso',
          descripcion : 'Esta es la descripción del curso'
        }
      }
      handleChange = (e) =>{ 
        this.setState({value: e.target.value});
      }
    render(){
        const aiologo = require('../img/iconos/aiologo.png')
        return (
            <div className="col-sm-12 centered">
            <div className="cartaGrande">
			<h4>{this.state.titulo}</h4>
			<hr/>
			<div className="contenedorInfo">
			<img src={aiologo} />
			<p>{this.state.descripcion}</p>
			</div>
		</div>
          </div>
          );
    }
}
export default Cursos;