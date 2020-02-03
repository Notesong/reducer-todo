export const initialState = [{
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }];

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("in add_todo");
            console.log(state);
            console.log(action);
            const newState = [
                ...state, 
                {
                    task: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
            console.log(newState);
            return newState;
        default:
            return state;    
    }
};