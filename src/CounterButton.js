import React from 'react';

function CounterButton({counter, countUp}) {
    return <button onClick={countUp}>{counter}</button>
}
export default CounterButton;