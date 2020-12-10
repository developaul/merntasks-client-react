import React, { useContext, useEffect } from 'react';

import Proyecto from './Proyecto';

import ProyectoContext from '../../context/proyectos/ProyectoContext';

const ListadoProyectos = () => {

    // Extraer Proyectos del State Inicial
    const proyectosContext = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener Proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
    }, []);

    // Revisar si existen proyectos
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            {
                proyectos.map(proyecto => (
                    <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
                ))
            }
        </ul>
    );
};

export default ListadoProyectos;