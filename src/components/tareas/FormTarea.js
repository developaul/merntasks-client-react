import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';

import ProyectoContext from '../../context/proyectos/ProyectoContext';

const FormTarea = () => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

    // Custom Hook del Formulario
    const [tarea, handleInputChange] = useForm({
        nombre: '',
    });
    const { nombre } = tarea;

    // si no hay proyectos seleccionado
    if (!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const handleSubmit = () => {

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
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
    );
};

export default FormTarea;