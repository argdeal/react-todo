import React, { Component } from 'react';
import './todo-list-item.css';

export default class ToDoListItem extends Component {

    render () {
        const { 
                label,
                onDeleted,
                onToggleImportant,
                onToggleDone,
                done,
                important
            } = this.props;

        let classNames = done ? 'todo-list-item done' : 'todo-list-item';
        classNames = important ? classNames + ' important' : classNames;
    
        return (
            <span className={classNames}>
                <span 
                    className="todo-list-item-label"
                    onClick={ onToggleDone }
                >
                    { label }
                </span>
    
                <span className="btn-group" role="group" aria-label="Basic example">
                    <button 
                        type="button" 
                        className="btn btn-outline-success btn-sm"
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-exclamation" />
                    </button>
    
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm"
                        onClick={onDeleted}
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                </span>            
            </span>
        );
    
    }
}