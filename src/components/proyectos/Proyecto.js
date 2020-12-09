import React from 'react';

const Proyecto = ({ proyecto: { nombre } }) => {
    return (
        <li>
            <button
                className="btn btn-blank"
                type="button"
            >
                {nombre}
            </button>
        </li>
    );
};

export default Proyecto;