import React from 'react';

const Todo = ({ item, dispatch }) => {
    return (
        <div className="todo">
            <div 
                // let user declare task completed by clicking it
                onClick={e => dispatch({ type: 'TOGGLE_COMPLETED', payload: item.id}) }
                // changes css based on whether task completed
                className={`task${item.completed ? " completed" : ""}`}
            >
                <p>{item.task}</p>
            </div>

        </div>
    )
};

export default Todo;

