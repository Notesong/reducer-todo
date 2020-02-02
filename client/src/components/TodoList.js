import React, { useReducer } from 'react';
import Todo from './Todo';
import { initialState, todoReducer } from '../reducers';

const TodoList = props => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div className="todo-list">
            {state.map(item => (
                <Todo 
                    item={item.item} 
                    key={item.id} 
                    completed={item.completed}
                />
            ))}
        </div>
    )
}

export default TodoList;