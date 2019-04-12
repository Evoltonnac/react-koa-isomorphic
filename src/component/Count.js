import React from 'react';

const Count = ({num, onAdd, onMinus, onReset}) => {
    return (
        <div>
        <button onClick={onAdd}>add</button>
        <div>count: {num.toString()}</div>
        <button onClick={onMinus}>minus</button>
        <br/><button onClick={onReset}>reset</button>
        </div>
    )
}

export default Count;