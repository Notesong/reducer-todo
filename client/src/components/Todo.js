import React from 'react';
import Tag from './Tag';

const Todo = ({ item, dispatch }) => {
    return (
        <div 
            // let user declare task completed by clicking it
            onClick={e => dispatch({ type: 'TOGGLE_COMPLETED', payload: item.id}) }
            // changes css based on whether task completed
            className={`todo${item.completed ? " completed" : ""}`}
        >
            <p>{item.task}</p>
            {item.tags.map( tag => {
                return <Tag 
                    tag={tag}
                    key={tag + item.id}
                />
            })}

        </div>
    )
};

export default Todo;

