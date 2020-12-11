import React, { useContext, useEffect } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Proyecto from './Proyecto';

import ProyectoContext from '../../context/proyectos/ProyectoContext';

const ListadoProyectos = () => {

    // Extraer Proyectos del State Inicial
    const proyectosContext = useContext(ProyectoContext);
    const { proyectos, obtenerProyectos } = proyectosContext;

    // Obtener Proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    }, []);

    // Revisar si existen proyectos
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {
                    proyectos.map(proyecto => (
                        <CSSTransition
                            key={proyecto.id}
                            timeout={200}
                            classNames="tarea"
                        >
                            <Proyecto
                                proyecto={proyecto}
                            />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </ul>
    );
};

export default ListadoProyectos;