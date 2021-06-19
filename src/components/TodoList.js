import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, handleToggleDone, handleDelete}) => {
    return (
        <ul className="list-group">
            {
                todos.map( (todo, index) => ( <TodoItem key={todo.id} todo = { todo } index = { index } handleDelete = { handleDelete } handleToggleDone = { handleToggleDone } /> ))      
            }
        </ul>
    )
}
