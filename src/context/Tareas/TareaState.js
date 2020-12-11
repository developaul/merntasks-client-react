import React, { useReducer } from 'react';

import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';

import {
    TAREAS_PROYECTOS,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = ({ children }) => {

    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 1 },
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 2 },
            { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 3 },
            { id: 7, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 1 },
            { id: 8, nombre: 'Elegir Hosting', estado: true, proyectoId: 2 }
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    };

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Obtener tareas de un proyecto por su id
    const obtenerTareas = proyectoId => dispatch({
        type: TAREAS_PROYECTOS,
        payload: proyectoId
    });

    // Agregar una nueva tarea
    const agregarTarea = tarea => dispatch({
        type: AGREGAR_TAREA,
        payload: tarea
    });

    // Valida la tarea
    const validarTarea = () => dispatch({
        type: VALIDAR_TAREA
    });

    // Eliminar tarea por su id
    const eliminarTarea = id => dispatch({
        type: ELIMINAR_TAREA,
        payload: id
    });

    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => dispatch({
        type: ESTADO_TAREA,
        payload: tarea
    });

    // Extrae una tarea para edición
    const guardarTareaActual = tarea => dispatch({
        type: TAREA_ACTUAL,
        payload: tarea
    });

    // Edita Modifica una tarea
    const actualizarTarea = tarea => dispatch({
        type: ACTUALIZAR_TAREA,
        payload: tarea
    });

    // Elimina la tarea seleccionada
    const limpiarTarea = () => dispatch({
        type: LIMPIAR_TAREA
    });

    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {children}
        </TareaContext.Provider>
    );
};

export default TareaState;