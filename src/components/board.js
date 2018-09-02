import React, { Component } from 'react';

import AddForm from './add-form';

class Board extends Component {
    render() {
        console.log(this.props);
        return(
            <div className="board">
                <h2>{this.props.title}</h2>
                <ul className="lists">
                <li className="list-wrapper">This will be a LIST</li>
                    <li className="add-list-wrapper">
                        <AddForm 
                        type="list"/>
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