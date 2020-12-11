import React, { useContext } from 'react';

import Tarea from './Tarea';

import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareasContext from '../../context/tareas/TareaContext';

const ListadoTareas = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Extraer tareas del state inicial
    const tareasContext = useContext(TareasContext);
    const { tareasproyecto } = tareasContext;

    // si no hay proyectos seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    return (
        <>
            <h2>Proyeco: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0 ?
                    (
                        <li className="tarea"><p>No hay tareas</p></li>
                    )
                    :
                    (
                        tareasproyecto.map(tarea => (
                            <Tarea
                                key={tarea.nombre}
                                tarea={tarea}
                            />
                        ))
                    )
                }
            </ul>

            <button
                className="btn btn-eliminar"
                type="button"
                onClick={() => eliminarProyecto(proyectoActual.id)}
            >
                Eliminar Proyecto &times;
            </button>
        </>
    );
};

export default ListadoTareas;