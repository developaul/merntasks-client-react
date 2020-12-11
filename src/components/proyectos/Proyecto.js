import React, { useContext } from 'react';

import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareasContext from '../../context/tareas/TareaContext';

const Proyecto = ({ proyecto }) => {

    // Obtener state de proyectos
    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectosContext;

    // Obtener state de tareas
    const tareasContext = useContext(TareasContext);
    const { obtenerTareas } = tareasContext;

    const { nombre, id } = proyecto;

    // selecciona el proyecto actual
    const seleccinarProyecto = id => {
        proyectoActual(id); // Fijar un proyecto Actual
        obtenerTareas(id); // Filtrar las tareas
    };

    return (
        <li>
            <button
                className="btn btn-blank"
                type="button"
                onClick={() => seleccinarProyecto(id)}
            >
                {nombre}
            </button>
        </li>
    );
};

export default Proyecto;