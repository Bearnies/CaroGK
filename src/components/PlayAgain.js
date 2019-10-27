import React from 'react'

const PlayAgain = ({onClick}) => {
    return (
        <button className = 'classExtraBtn block-example border-danger rounded-pill' onClick={() => onClick()}>Play Again</button>
    );
};

export default PlayAgain;