import React, { useReducer } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { initialState, todoReducer } from '../reducers';

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="todo-section">
            <TodoForm dispatch={dispatch} />
            <div className="todo-list">
                {state.map(item => (
                    <Todo 
                        item={item} 
                        key={item.id} 
                        completed={item.completed}
                    />
                ))}                
            </div>

        </div>
    )
}

export default TodoList;