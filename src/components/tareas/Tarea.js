import React, { useContext } from 'react';

import TareasContext from '../../context/tareas/TareaContext';

const Tarea = ({ tarea }) => {

    const { nombre, estado, id, proyectoId } = tarea;

    // Extraer función del context tarea
    const tareasContext = useContext(TareasContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    // Elimina la tarea por su id
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoId);
    };

    // Modifica el estado de las tareas
    const cambiarEstado = tarea => {
        tarea.estado = !tarea.estado;
        cambiarEstadoTarea(tarea);
    };

    // Agrega la tarea actual
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    };

    return (
        <li className="tarea sombra">
            <p>{nombre}</p>

            <div className="estado">
                {estado ?
                    (
                        <button
                            className="completo"
                            type="button"
                            onClick={() => cambiarEstado(tarea)}
                        >
                            Completo
                        </button>
                    )
                    :
                    (
                        <button
                            className="incompleto"
                            type="button"
                            onClick={() => cambiarEstado(tarea)}
                        >
                            Incompleto
                        </button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    className="btn btn-primario"
                    type="button"
                    onClick={() => seleccionarTarea(tarea)}
                >
                    Editar
                </button>

                <button
                    className="btn btn-secundario"
                    type="button"
                    onClick={() => tareaEliminar(id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Tarea;