import React, { useReducer } from 'react';

import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';

import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS
} from '../../types';

const ProyectoState = ({ children }) => {
    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de sitio web' }
    ];

    const initialState = {
        proyectos: [],
        formulario: false
    };

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initialState);

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    };

    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        });
    };

    return (
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {children}
        </ProyectoContext.Provider>
    );
};

export default ProyectoState;