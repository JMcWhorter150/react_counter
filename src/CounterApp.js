import React from 'react';
import CounterButton from './CounterButton';

class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buttons: []
        }
    }

    render() {
        return (
        <div>
            {this.state.buttons.map((counter, i) => (
                <CounterButton key={i} handleDelete = {this._handleDelete} counter={counter.counter} index={i} countUp={this._countUp} color={counter.color} />
            ))}
            <button onClick={this._addButton}>Add Counter</button>
        </div>
        )
    }

    _countUp = (index) => {
        const newButtons = [...this.state.buttons];
        newButtons[index].counter = this.state.buttons[index].counter + 1;
        newButtons[index].color = newButtons[index].counter % 2 === 0 ? 'green' : 'red';
        this.setState({
            buttons: newButtons
        })
    }

    _addButton = () => {
        const newButtons = [...this.state.buttons];
        this.setState({
            buttons: [...this.state.buttons,
            {counter: 0, color: 'green'}]
        })
    }

    _handleDelete = (index) => {
        const newButtons = [...this.state.buttons];
        newButtons.splice(index, 1);
        this.setState({
            buttons: newButtons
        })
    }
}

export default CounterApp;