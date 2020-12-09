import React from 'react';

import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm';

const Login = () => {

    // State para Iniciar Sesión
    const [usuario, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = usuario

    const handleSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios

        // Acción

    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form
                    onSubmit={handleSubmit}
                >
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
                        <input
                            className="btn btn-primario btn-block"
                            type="submit"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>

                <Link
                    className="enlace-cuenta"
                    to="/nueva-cuenta"
                >
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
};

export default Login;