export const initialState = [{
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589,
        tags: ['education', 'programming']
    }];

export const todoReducer = (state, action) => {
    switch (action.type) {
        // add a new todo to state
        case "ADD_TODO":
            // set up variable to split up string of tags
            let splitTags = [];
            // check if there are any tags provided
            // if there are, split them up into the array
            if (action.payload.tags.length > 0) {
                splitTags = action.payload.tags.split(',')
            }
            const newAddState = [
                ...state, 
                {
                    task: action.payload.newTodo,
                    completed: false,
                    id: Date.now(),
                    tags: splitTags
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