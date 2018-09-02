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
        console.log('submitting!');
        e.preventDefault();
        const text = this.textInput.value.trim();
        console.log(text);
    }



    setEditing(editing) {
        this.setState({
            editing
        });
    }
    render() {
        console.log(this.state);
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
            onSubmit={(e) => this.onSubmit(e)}>
                <input type="text" ref={input => this.textInput = input} />
                <button type="button">Add</button>
                <button type="button"
                onClick={() => this.setEditing(false)}>Cancel</button>
            </form>
        );
    }
}

export default AddForm;