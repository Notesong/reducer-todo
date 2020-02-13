import React from 'react';

const Tag = ({ tag, item, dispatch }) => {
    function handleSubmit (e) {
        e.stopPropagation();
        e.preventDefault();
        dispatch({ type: 'REMOVE_TAG', payload: { tagid: tag.id, itemid: item.id } });
    }
    return (
        <button onClick={handleSubmit} className='tag'>{tag.name}</button>
    )
};

export default Tag;