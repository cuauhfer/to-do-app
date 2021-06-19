import React from 'react'

export const TodoItem = ({todo, index, handleToggleDone, handleDelete}) => {
    return (
        <li className="list-group-item">
            <span id={`desc${todo.id}`} className={(todo.done === true)? `complete`: ``}>{ index + 1 }. {todo.desc}</span>
            <span className="controls">
                <button className="btn btn-primary" onClick={ ()=>{ handleToggleDone(todo.id) } }>Hecho</button>
                <button className="btn btn-danger" onClick={ ()=>{ handleDelete(todo.id) } }>Borrar</button>
            </span>
        </li>
    )
}
