import React, { Component } from 'react';
import './add-list-item.css';

export default class AddListItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (evt) => {
        console.log(evt.target.value);
        this.setState({
            label: evt.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { onAddItem } = this.props;
        onAddItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    render () {
        return (
            <form 
                className="add-list-item d-flex"
                onSubmit={this.onSubmit}
            >
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Add new item..."
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button type="submit" className="btn btn-outline-secondary">
                    Add
                </button>
            </form>
        );
    }
}