import React, { Component } from 'react';

import Card from './card';
import AddForm from './add-form';

import './list.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    addCard(text) {
        this.setState({
            cards: [...this.state.cards, {text}]
        });
    }
    render() {
        console.log(this.props);
        const cards = this.state.cards.map((card, index) => (
            <li key={index}>
                <Card {...card} />
            </li>
        ));
        console.log(cards);
        return(
            <div>
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {cards}
                    <li>
                        <AddForm 
                        type="card"
                        onAdd={text => this.addCard(text)}/>
                    </li>
                </ul>
            </div>
        );
    }
}

List.defaultProps = {
    title: ''
};

export default List;