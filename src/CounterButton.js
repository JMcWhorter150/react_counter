import React from 'react';

function CounterButton({counter, countUp, color}) {
    const styles = {color}
    return <button onClick={countUp} style={styles}>{counter}</button>
}
export default CounterButton;