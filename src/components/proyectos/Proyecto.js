import React, { useContext } from 'react';

import ProyectoContext from '../../context/proyectos/ProyectoContext';

const Proyecto = ({ proyecto }) => {

    // Obtener state de proyectos
    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectosContext;

    const { nombre, id } = proyecto;

    return (
        <li>
            <button
                className="btn btn-blank"
                type="button"
                onClick={() => proyectoActual(id)}
            >
                {nombre}
            </button>
        </li>
    );
};

export default Proyecto;