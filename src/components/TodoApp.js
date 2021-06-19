import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { AddForm } from './AddForm';
import './styles.css';

const init = () => {
    // return the todos in localStorage, if are null, return an empty array
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos) );
    }, [todos]);

    const handleAdd = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    };

    const handleDelete = ( todoId ) => {
        dispatch({
            type: 'delete',
            payload: todoId
        });
    };

    const handleToggleDone = ( todoId ) => {
        dispatch({
            type: 'toggleDone',
            payload: todoId
        });
    };

    return (
        <div>
            <h1>To-Do App  </h1>
            <hr></hr>
            <h4>Agregar tarea</h4>  
            <AddForm handleAdd = { handleAdd } />
            <h4>Tareas <small>({todos.length})</small></h4>
            <TodoList todos = {todos} handleToggleDone = { handleToggleDone } handleDelete = { handleDelete } />
        </div>
    );
}
