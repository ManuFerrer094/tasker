//Esto será nuestro almacén de toda la data

import {createStore} from 'redux';

const initialState = {
    cursos:[{
        id:1,
        titulo : 'English for begginers',
        descripcion : 'Esta es la descripción del curso',
        estadoCurso: "EMPEZAR"
    },
    {
        id:2,
        titulo : 'English for good people',
        descripcion : 'Esta es la descripción del curso',
        estadoCurso: "CONTINUAR"
    },
    {
        id:3,
        titulo : 'English for beautyful people',
        descripcion : 'Esta es la descripción del curso',
        estadoCurso: "EMPEZAR"
    },
    {
        id:4,
        titulo : 'English for begginers',
        descripcion : 'Esta es la descripción del curso',
        estadoCurso: "EMPEZAR"
    },
    {
        id:5,
        titulo : 'English for good people',
        descripcion : 'Esta es la descripción del curso',
        estadoCurso: "CONTINUAR"
    },
    {
        id:6,
        titulo : 'English for beautyful people',
        descripcion : 'Esta es la descripción del curso',
        estadoCurso: "EMPEZAR"
    }],
    tareas:[
        {
            id:1,
            titulo : 'Listening',
            descripcion : 'Esta es la descripción de la tarea',
            dificultad: "Media",
            estadoTarea: "EMPEZAR"
        }
    ]
}
//Esta función se encargará de hacer los cambios

const reducerControlador = (state = initialState, action) => {
    return state
}
export default createStore(reducerControlador)