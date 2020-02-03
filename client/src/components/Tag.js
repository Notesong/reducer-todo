import React from 'react';

const Tag = ({ tag }) => {
    function handleSubmit (e) {
        e.stopPropagation();
    }

    return (
        <button onClick={handleSubmit} className='tag'>{tag}</button>
    )
};

export default Tag;