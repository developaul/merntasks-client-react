import React, { useContext } from 'react';

import Tarea from './Tarea';

import ProyectoContext from '../../context/proyectos/ProyectoContext';

const ListadoTareas = () => {

    // Extraer proyectos del state inicial
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // si no hay proyectos seleccionado
    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataformas de pago', estado: false },
        { nombre: 'Elegir Hosting', estado: true },
    ];

    return (
        <>
            <h2>Proyeco: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasProyecto.length === 0 ?
                    (
                        <li className="tarea"><p>No hay tareas</p></li>
                    )
                    :
                    (
                        tareasProyecto.map(tarea => (
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