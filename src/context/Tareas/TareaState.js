import React, { useReducer } from 'react';

import TareaContext from './TareaContext';

import TareaReducer from './TareaReducer';

const TareaState = ({ children }) => {

    const initialState = {
        tareas: []
    };

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    return (
        <TareaContext.Provider
            value={{

            }}
        >
            {children}
        </TareaContext.Provider>
    );
};

export default TareaState;