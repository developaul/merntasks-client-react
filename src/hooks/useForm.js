import { useState } from 'react';

const useForm = (initialState = {}) => {

    const [state, setState] = useState(initialState);

    const handleInputChange = ({ target }) => setState({
        ...state,
        [target.name]: target.value
    });

    const handleInputReset = () => setState(initialState);

    const handleState = newState => setState(newState);

    return [state, handleInputChange, handleInputReset, handleState];
};

export default useForm;