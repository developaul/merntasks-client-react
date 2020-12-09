import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS
} from '../../types';

// El reducer solo se encarga de cambiar el state

const ProyectoReducer = (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }

        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }

        default:
            return state;
    };
};

export default ProyectoReducer;