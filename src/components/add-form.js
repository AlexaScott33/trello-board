import React, { Component } from 'react';

import './add-form.css';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
    }

    onSubmit(e) {
        const text = this.textInput.value.trim();
        if (text && this.props.onAdd) {
            this.props.onAdd(text);
        }
        this.textInput.value = '';
    }

    setEditing(editing) {
        this.setState({
            editing
        });
    }

    render() {
        console.log(this.state);
        console.log(this.props.onAdd);
        if (!this.state.editing) {
            return(
                <div className="add-button"
                onClick={() => this.setEditing(true)}>
                <a href="#">Add a...{this.props.type}</a>  
                </div>
            );
        }
        return(
            <form className="card add-form"
            onSubmit={(e) => {
                e.preventDefault();
                this.onSubmit(e.target.textInput.value)}}>
                <input type="text" name="textInput" ref={input => this.textInput = input} />
                <button type="submit">Add</button>
                <button type="button"
                onClick={() => this.setEditing(false)}>Cancel</button>
            </form>
        );
    }
}

export default AddForm;