import React from 'react';

const Todo = ({ item, toggleCompleted }) => {
    return (
        <div className="todo">
            <div 
                // let user declare task completed by clicking it
                onClick={e => toggleCompleted(item.id)}
                // changes css based on whether task completed
                className={`task${item.completed ? " completed" : ""}`}
            >
                <p>{item.task}</p>
            </div>

        </div>
    )
};

export default Todo;

