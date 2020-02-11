import React from 'react';
import CounterButton from './CounterButton';

class CounterApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        return (
        <div>
            <CounterButton counter={this.state.counter} countUp={this._countUp} />
        </div>
        )
    }

    _countUp = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default CounterApp;