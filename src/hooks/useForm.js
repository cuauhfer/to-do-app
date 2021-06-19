import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState( initialState );

    const resetForm = () => {
        setValues( initialState );
    }

    const handleInputChanges = ({target}) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    };
    
    return [ values, handleInputChanges, resetForm ];
}
