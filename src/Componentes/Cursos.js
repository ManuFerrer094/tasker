import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state =>({
  cursos:state.cursos
})

const mapDispatchToProps = dispatch =>({
  
})
const aiologo = require('../img/iconos/aiologo.png')
const Cursos = ({cursos}) => (
<section>
            
            <div className="contendor-cursos">
              {
                cursos.map(curso =>(
                  <div className="col-sm-12 centered">
                  <div className="cartaGrande">
                    <h4>{curso.titulo}</h4>
                    <hr/>
                  <div className="contenedorInfo">
                    <img src={aiologo} />
                    <p>{curso.descripcion}</p>
                  </div>
                  <div className="col-sm-12">
                    <button className="fright">{curso.estadoCurso}</button>
                    </div>
                  </div>
                </div>
                ))
              }
            </div>
          </section>
)

export default connect(mapStateToProps, mapDispatchToProps) (Cursos);