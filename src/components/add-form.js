import React, { Component } from 'react';

import './add-form.css';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }
    render() {
        if (!this.state.editing) {
            return(
                <div className="add-button"
                onClick={() => this.setEditing(true)}>
                <a href="#">Add a...{this.props.type}</a>  
                </div>
            );
        }
        return(
            <div>neeed to load form</div>
            // <form></form>
        );
    }
}

export default AddForm;