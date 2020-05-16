export const addTodo = (title) => ({
    type: "ADD_TODO",
    payload: {
        title
    }
});

export const removeTodo = (id) => ({
    type: "REMOVE_TODO",
    payload: {
        id
    }
});

export const editTodo = (id, title) => ({
    type: "EDIT_TODO",
    payload: {
        id,
        title
    }
})

export const toggleComplete = (id) => ({
    type: "TOGGLE_COMPLETE",
    payload: {
        id
    }
})

export const toggleEdit = (id) => ({
    type: "TOGGLE_EDIT",
    payload: {
        id
    }
})