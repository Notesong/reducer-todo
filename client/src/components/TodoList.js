import React, { useReducer } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { initialState, todoReducer } from '../reducers';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="todo-section">
            {/* display form */}
            <TodoForm dispatch={dispatch} />
            <div className="todo-list">
                {/* display todo list */}
                {state.map(item => (
                    <Todo 
                        item={item} 
                        key={item.id} 
                        completed={item.completed}
                        dispatch={dispatch}
                    />
                ))}                
            </div>

        </div>
    )
}

export default TodoList;