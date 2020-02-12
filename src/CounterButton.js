import React from 'react';

function CounterButton({counter, countUp, color, index, handleDelete}) {
    const styles = {color};
    return (
        <div>
            <button onClick={() => {countUp(index)}} style={styles}>{counter}</button>
            <button onClick={() => {handleDelete(index)}}>Delete</button>
        </div>
    );
}
export default CounterButton;