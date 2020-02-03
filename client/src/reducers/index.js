export const initialState = [{
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newAddState = [
                ...state, 
                {
                    task: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
            return newAddState;
        case "TOGGLE_COMPLETED":
            const newToggleState = state.map(item => {
                if(item.id === action.payload) {
                    return {
                    ...item,
                    completed: !item.completed
                    };
                }
                return item;
            });    
            return newToggleState;
        case "CLEAR_COMPLETED":
            const newClearState = state.filter(item => {
                  return !item.completed;
            });
            return(newClearState);
        default:
            return state;    
    }
};