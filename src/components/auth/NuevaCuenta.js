import React from 'react';

import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

const NuevaCuenta = () => {

    // State para Iniciar Sesión
    const [usuario, handleInputChange] = useForm({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario

    const handleSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios

        // Validar que el password minimo de 6 caracteres

        // Revisar que los 2 passwords sean iguales

        // Acción

    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre:</label>

                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email:</label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password:</label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password:</label>

                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            value={confirmar}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            className="btn btn-primario btn-block"
                            type="submit"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link
                    className="enlace-cuenta"
                    to="/"
                >
                    Volver a Iniciar Sesión
                </Link>
            </div>
        </div>
    );
};

export default NuevaCuenta;