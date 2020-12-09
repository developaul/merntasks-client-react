import React, { useContext } from 'react';

import useForm from '../../hooks/useForm';

import ProyectoContext from '../../context/proyectos/ProyectoContext';

const NuevoProyecto = () => {

    // State del Formulario
    const proyectosContext = useContext(ProyectoContext);
    const { formulario, mostrarFormulario } = proyectosContext;

    const [proyecto, handleInputChange] = useForm({
        nombre: ''
    });

    const { nombre } = proyecto;

    const handleSubmit = e => {
        e.preventDefault();

        // Validar Proyecto

        // Agregar al State

        // Reiniciar el Form

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
        </>
    );
};

export default NuevoProyecto;