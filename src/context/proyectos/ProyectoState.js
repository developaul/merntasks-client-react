import React, { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';

import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';

const ProyectoState = ({ children }) => {
    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de sitio web' }
    ];

    const initialState = {
        proyectos: [],
        formulario: false,
        errorFormulario: false,
        proyecto: null
    };

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initialState);

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => dispatch({
        type: FORMULARIO_PROYECTO
    });

    // Obtener los proyectos
    const obtenerProyectos = () => dispatch({
        type: OBTENER_PROYECTOS,
        payload: proyectos
    });

    // Agrega un nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        });
    };

    // Validar formulario por errores
    const mostrarError = () => dispatch({
        type: VALIDAR_FORMULARIO
    });

    // Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => dispatch({
        type: PROYECTO_ACTUAL,
        payload: proyectoId
    });

    // Elimina un proyecto por su id
    const eliminarProyecto = proyectoId => dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyectoId
    });

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorFormulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {children}
        </ProyectoContext.Provider>
    );
};

export default ProyectoState;