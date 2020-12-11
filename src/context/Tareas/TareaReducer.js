
import { TAREAS_PROYECTOS } from '../../types';

const ProyectoReducer = (state, action) => {
    switch (action.type) {
        case TAREAS_PROYECTOS:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            };

        default:
            return state;
    };
};

export default ProyectoReducer;