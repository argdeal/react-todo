import React, { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChanged = (e) => {
        // debugger;
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }

    render() {

        const { onFilter } = this.props;

        return (
            <div className="search-panel">
                <input 
                    type="text"
                    placeholder="search..."
                    value={this.state.term}
                    onChange={(e) => this.onSearchChanged(e, onFilter)}
                />
            </div>
        )    
    }
} 

export default SearchPanel;