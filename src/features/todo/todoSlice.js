import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialStete = {
    todos: [{ id: 1, text: "First Task" }],
}
export const TodoSlice = createSlice({
    name: "todo",
    initialState: initialStete,
    reducers: {
        addTodo: (state, action) => {
            const todo = { id: nanoid(), text: action.payload }
            state.todos.push(todo);

        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
        },
    },
})

export const { addTodo, removeTodo, toggleTodo } = TodoSlice.actions;
export default TodoSlice.reducer;