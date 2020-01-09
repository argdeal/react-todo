import React from 'react';
import ToDoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const ToDoList = ({ data, onDeleted, onToggleImportant, onToggleDone }) => {

    // create array of JSX elements
    const elements = data.map( elem => {

        const { id, ...itemProps } = elem;

        return (
            <li key={id} className="list-group-item">
                <ToDoListItem 
                    onDeleted={() => onDeleted(id)} 
                    onToggleImportant={() => onToggleImportant(id)} 
                    onToggleDone={() => onToggleDone(id)}
                    { ...itemProps } 
                />
            </li>
        );
    })

    // insert it into the markup
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
}

export default ToDoList;