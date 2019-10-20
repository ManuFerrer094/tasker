import React from "react";
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button} from "reactstrap";
import '../estilos/estiloBotones.css';
import {connect} from 'react-redux';

const mapStateToProps = state =>({
  tareas:state.tareas
})

const mapDispatchToProps = dispatch =>({
  
})
const aiologo = require('../img/iconos/aiologo.png')
const Tareas = ({tareas}) => (
<section>
            
            <div className="contendor-tareas">
              {
                tareas.map(tarea =>(
                  <div className="col-sm-12 centered">
                  <div className="cartaGrande">
                    <h4>{tarea.titulo}</h4>
                    <hr/>
                  <div className="contenedorInfo">
                    <img src={aiologo} />
                    <p>{tarea.descripcion}</p>
                    <p>Dificultad: {tarea.dificultad}</p>
                  </div>
                  <div className="col-sm-12">
                    <button className="fright">{tarea.estadoTarea}</button>
                    </div>
                  </div>
                </div>
                ))
              }
            </div>
          </section>
) 

export default connect(mapStateToProps, mapDispatchToProps)(Tareas);