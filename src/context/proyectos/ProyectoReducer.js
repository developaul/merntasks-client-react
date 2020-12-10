import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO
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

        case AGREGAR_PROYECTO:
            return {
                ...state,
                formulario: false,
                errorFormulario: false,
                proyectos: [...state.proyectos, action.payload]
            };

        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            };

        default:
            return state;
    };
};

export default ProyectoReducer;