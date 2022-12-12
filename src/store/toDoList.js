import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDoList: []
};

const toDoListSlice = createSlice({
    name:"toDo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.toDoList = [...state.toDoList, action.payload]
        },
        removeToDo: (state, action) => {
            state.toDoList = state.toDoList.filter(e => e.id !== action.payload.id)
        }
    }
});

export const { addToDo, removeToDo } = toDoListSlice.actions;

export default toDoListSlice.reducer;
