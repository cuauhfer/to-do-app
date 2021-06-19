import React from 'react'
import { useForm } from '../hooks/useForm';

export const AddForm = ( { handleAdd } ) => {

    const [ formValues, handleInputChange, resetForm ] = useForm({description: ''});

    const handleSubmit = (e) => {
        e.preventDefault();

        // If the description is empty
        if (formValues.description.trim().length < 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: formValues.description,
            done: false
        };

        handleAdd(newTodo);
        resetForm();
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="text" name="description" placeholder="Nueva tarea ..." autoComplete="off" value={ formValues.description } onChange={ handleInputChange }/>
                <button type="submit" className="btn btn-success">Agregar</button>
            </form>
        </div>
    )
}
