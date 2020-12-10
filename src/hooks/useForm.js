import { useState } from 'react';

const useForm = (initialState = {}) => {

    const [state, setState] = useState(initialState);

    const handleInputChange = ({ target }) => setState({
        ...state,
        [target.name]: target.value
    });

    const handleInputReset = () => setState(initialState);

    return [state, handleInputChange, handleInputReset];
};

export default useForm;