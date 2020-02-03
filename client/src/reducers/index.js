export const initialState = [{
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }];

export const todoReducer = (state, action) => {
    switch (action.type) {
        // add a new todo to state
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
        // toggle a todo as completed by changing the item's completed value
        // state is mapped over checking for item's id
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
        // clear all the completed todo's by filtering through them and returning
        // only non-completed todo's
        case "CLEAR_COMPLETED":
            const newClearState = state.filter(item => {
                  return !item.completed;
            });
            return(newClearState);
        default:
            return state;    
    }
};