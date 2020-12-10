import React, { useContext } from 'react';

import useForm from '../../hooks/useForm';

import ProyectoContext from '../../context/proyectos/ProyectoContext';

const NuevoProyecto = () => {

    // State del Formulario
    const proyectosContext = useContext(ProyectoContext);
    const {
        formulario,
        errorformulario,
        mostrarFormulario,
        agregarProyecto,
        mostrarError
    } = proyectosContext;

    // Custom Hook del Formulario
    const [proyecto, handleInputChange, handleInputReset] = useForm({
        nombre: ''
    });

    const { nombre } = proyecto;

    const handleSubmit = e => {
        e.preventDefault();

        // Validar Proyecto
        if (!nombre.trim()) return mostrarError();

        // Agregar nuevo Proyecto
        agregarProyecto(proyecto);

        // Reiniciar el Form
        handleInputReset();
    };

    return (
        <>
            <button
                className="btn btn-block btn-primario"
                type="button"
                onClick={mostrarFormulario}
            >
                Nuevo Proyecto
            </button>

            { formulario &&
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="input-text"
                            type="text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />

                        <input
                            className="btn btn-block btn-primario"
                            type="submit"
                            value="Agregar Proyecto"
                        />
                    </form>

                )
            }

            { errorformulario && <p className="mensaje error">El nombre del Proyecto es obligatorio</p>}
        </>
    );
};

export default NuevoProyecto;