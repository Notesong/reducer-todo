export const initialState = [{
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    tags: [
        {name: 'education', id: 74983724927},
        {name: 'programming', id: 46396483296}
    ]
},{
    task: 'Another thing to do',
    completed: false,
    id: 3892987587,
    tags: [
        {name: 'work', id: 47320974432},
        {name: 'weekend', id: 374837244209}
    ]
}];

export const todoReducer = (state, action) => {
    function arrayToObjToArray(array) {
        var obj = {};
        var newArray = [];
        const id = Date.now() * 2;
        for (var i = 0; i < array.length; i++) {
            obj["name"] = array[i];
            obj["id"] = id + i;
            newArray.push(obj);
            obj = {}
        }
        return newArray;
    }

    switch (action.type) {
        // add a new todo to state
        case "ADD_TODO":
            // set up variable to split up string of tags
            let tagsArray = [];
            // check if there are any tags provided
            // if there are, split them up into the array
            // then add id's
            if (action.payload.tags.length > 0) {
                const splitTags = action.payload.tags.split(',');
                tagsArray = arrayToObjToArray(splitTags);
            }
            
            const newAddState = [
                ...state, 
                {
                    task: action.payload.newTodo,
                    completed: false,
                    id: Date.now(),
                    tags: tagsArray
                }
            ];
            return newAddState;
        case "REMOVE_TAG":
            const newTagState = state.map(todo => {
                return {
                    ...todo,
                    tags: todo.tags.filter(tag => tag.id !== action.payload.tagid)
                }
            })
            return newTagState;
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