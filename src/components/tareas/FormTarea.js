import React, { useContext, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import useForm from '../../hooks/useForm';

import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareasContext from '../../context/tareas/TareaContext';

const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    // Extraer función para agregar una nueva tarea
    const tareasContext = useContext(TareasContext);
    const { tareaseleccionada, errortarea, agregarTarea, obtenerTareas, validarTarea, actualizarTarea, limpiarTarea } = tareasContext;

    // Effect detecta si hay una tarea seleccionada
    useEffect(() => {

        if (tareaseleccionada) {
            handleState(tareaseleccionada);
        } else {
            handleState({ nombre: '' });
        }

        // eslint-disable-next-line
    }, [tareaseleccionada]);

    // Custom Hook del Formulario
    const [tarea, handleInputChange, handleInputReset, handleState] = useForm({
        nombre: '',
    });
    const { nombre } = tarea;

    // si no hay proyectos seleccionado
    if (!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if (!nombre.trim()) return validarTarea();

        // Si es Edición o nueva tarea
        if (tareaseleccionada) {

            // Actualizar Tarea
            actualizarTarea(tarea);

            // Elimina la tarea seleccionada del state
            limpiarTarea();

        } else {

            // Generando Nueva tarea
            const nuevaTarea = {
                nombre: nombre.trim(),
                estado: false,
                proyectoId: proyectoActual.id,
                id: uuidv4()
            };

            // Agregar nueva tarea al proyecto actual
            agregarTarea(nuevaTarea);
        }

        // Volver a filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // Reiniciar Form
        handleInputReset();
    }

    return (
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input
                        className="input-text"
                        type="text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        className="btn btn-primario btn-submit btn-block"
                        type="submit"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {errortarea && <p className="mensaje error">El nombre de la tarea es obligatorio</p>}
        </div>
    );
};

export default FormTarea;