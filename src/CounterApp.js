import React from 'react';
import CounterButton from './CounterButton';

class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            color: 'red'
        }
    }

    render() {
        return (
        <div>
            <CounterButton counter={this.state.counter} countUp={this._countUp} color={this.state.color} />
        </div>
        )
    }

    _countUp = () => {
        this.setState({
            counter: this.state.counter + 1,
            color: this.state.counter % 2 === 0 ? 'green' : 'red'
        })
    }
}

export default CounterApp;