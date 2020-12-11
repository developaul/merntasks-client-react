import React, { useReducer } from 'react';

import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';

import { TAREAS_PROYECTOS } from '../../types';

const TareaState = ({ children }) => {

    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 2 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 1 },
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 2 }
        ],
        tareasproyecto: null
    };

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Obtener tareas de un proyecto por su id
    const obtenerTareas = proyectoId => dispatch({
        type: TAREAS_PROYECTOS,
        payload: proyectoId
    });

    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                obtenerTareas
            }}
        >
            {children}
        </TareaContext.Provider>
    );
};

export default TareaState;