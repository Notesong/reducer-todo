import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
    const [newTodo, setNewTodo] = useState('');
    const [tags, setTags] = useState('');

    // handles any todo input changes in the new todo form
    const handleChangesTodo = e => {
        setNewTodo(e.target.value);
    };
    // handles any tag input changes in the new todo form
    const handleChangesTags = e => {
        setTags(e.target.value);
    };
    // adds the new task and tags to the task list and resets the input fields
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: { newTodo: newTodo, tags: tags } });
        setNewTodo('');
        setTags('');
    };

    return (
        <div className="todo-form-section">
            <div>
                <header>
                    <p>Add a new task.  Tags are comma seperated.</p>
                </header>
                <div className="form-todo">
                    {/* form to add new todo */}
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Task"
                            onChange={handleChangesTodo}
                            type='text'
                            name='todo'
                            value={newTodo}
                            maxLength='200'
                        />
                        <input
                            placeholder="Tags"
                            onChange={handleChangesTags}
                            type='text'
                            name='tags'
                            value={tags}
                            maxLength='100'
                        />
                        <button className='btn'>Add</button>
                    </form>
                    {/* button to clear all completed todos */}               
                </div>                
            </div>
            <button className='btn' onClick={e => dispatch({ type: 'CLEAR_COMPLETED' }) }>
                    Delete Selected Tasks
            </button> 
        </div>
    )
}

export default TodoForm;