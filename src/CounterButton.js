import React from 'react';

function CounterButton({counter, countUp, color, index}) {
    const styles = {color};
    return <button onClick={() => {countUp(index)}} style={styles}>{counter}</button>
}
export default CounterButton;