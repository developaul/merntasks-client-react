import React from 'react';

const Tarea = ({ tarea: { nombre, estado } }) => {
    return (
        <li className="tarea sombra">
            <p>{nombre}</p>

            <div className="estado">
                {estado ?
                    (
                        <button
                            className="completo"
                            type="button"
                        >
                            Completo
                        </button>
                    )
                    :
                    (
                        <button
                            className="incompleto"
                            type="button"
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
                >
                    Editar
                </button>

                <button
                    className="btn btn-secundario"
                    type="button"
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Tarea;