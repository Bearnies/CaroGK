import React from 'react'

const Sorting = ({onClick, isAscending}) => {
    if (isAscending === true)
    {
        return (
            <button className = 'classExtraBtn block-example border-danger rounded-pill' onClick={() => onClick()}>Sort (Descend)</button>
        ); 
    }
    else if (isAscending === false)
    {
        return (
            <button className = 'classExtraBtn block-example border-danger rounded-pill' onClick={() => onClick()}>Sort (Ascend)</button>
        ); 
    }
};

export default Sorting;