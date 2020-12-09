import React from 'react';
import useForm from '../../hooks/useForm';

const FormTarea = () => {

    const [tarea, handleInputChange] = useForm({
        nombre: '',
    });

    const { nombre } = tarea;

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