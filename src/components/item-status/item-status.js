import React, { Component } from 'react';
import './item-status.css';

export default class ItemStatus extends Component {

    buttons = [
        { label: 'Active', name: 'active' },
        { label: 'All', name: 'all' },
        { label: 'Done', name: 'done' },
    ]

    render() {
        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map( ({name, label}) => {
            const isActive = name === filter;
            const clazz = isActive ? 'btn-primary' : 'btn-secondary'
            return (
                <button type="button" 
                        className={`btn ${clazz}`}
                        key={name}
                        onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group items-status" role="group">
                {buttons}
            </div>
        );
    }
}