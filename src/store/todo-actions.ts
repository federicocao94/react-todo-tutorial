import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { TodoModel } from "../models/redux-model";
import todoSlice from "./todoSlice";
import TodoService from "../service/todoService";

export const todoActions = todoSlice.actions

export const fetchTodos = ():ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        if(getState().todo.all_todos.length === 0) {
            const response:TodoModel[] = await TodoService.getAllTodos();
            dispatch(todoActions.setTodos(response));
        }
    }
}

export const fetchParticularTodo = (todo_id: number): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async(dispatch, getState) => {
        const response: TodoModel = await TodoService.getParticularTodo(todo_id);
        dispatch(todoActions.setParticularTodo(response));
    }
}