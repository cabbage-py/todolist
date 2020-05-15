let todoId = 0;

export default function reducer(state = [], action) {
    switch(action.type){
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: todoId++,
                    title: action.payload.title,
                    completed: false
                }
            ];
        
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);

        case "EDIT_TODO":
            return state.map(todo => todo.id !== action.payload.id ? todo : {...todo, title: action.payload.title})

        case "TOGGLE_COMPLETE":
            return state.map(todo => todo.id !== action.payload.id ? todo : {...todo, completed: !todo.completed})
        
        default:
            return state;
    }
}