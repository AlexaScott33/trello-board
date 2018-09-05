import React, { Component } from 'react';
import List from './list';
import AddForm from './add-form';

import './board.css';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: []
        };
    }

    addList(title) {
        this.setState({
            lists: [...this.state.lists, {title}]
        });
    }
    render() {
        console.log(this.state);
        const lists = this.state.lists.map((list, index) => (
            <li className="list-wrapper" key={index}>
                <List {...list}/>
            </li>
        ));
        console.log(lists);
        return(
            <div className="board">
                <h2>{this.props.title}</h2>
                <ul className="lists">
                    {lists}
                    <li className="add-list-wrapper">
                        <AddForm 
                        type="list"
                        onAdd={text => this.addList(text)}/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Board;

Board.defaultProps = {
    title: 'Board'
};