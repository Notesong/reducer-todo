import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
    const [newTodo, setNewTodo] = useState('');

    // handles any input changes in the new task form
    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    // adds the new task to the task list and resets the input field
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: newTodo});
        setNewTodo('');
    };

    return (
        <div className="form-todo">
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleChanges}
                        type='text'
                        name='todo'
                        value={newTodo}
                        maxLength='200'
                    />
                    <button className='btn'>Add</button>                    
                </form>
                <button className='btn' onClick={e => dispatch({ type: 'CLEAR_COMPLETED' }) }>
                    Delete Selected
                </button>
        </div>
    )
}

export default TodoForm;