import React from 'react';

const Todo = ({ item, dispatch }) => {
    return (
        <div 
            // let user declare task completed by clicking it
            onClick={e => dispatch({ type: 'TOGGLE_COMPLETED', payload: item.id}) }
            // changes css based on whether task completed
            className={`todo${item.completed ? " completed" : ""}`}
        >
            <p>{item.task}</p>

        </div>
    )
};

export default Todo;

