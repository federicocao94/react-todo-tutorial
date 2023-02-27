import { TodoModel } from "../models/redux-model";
import Api from "./Api"

export default {
    async getAllTodos() {
        var response = await Api().get('todos');
        return response.data;
    },

    async getParticularTodo(todo_id: number) {
        var response=await Api().get('todos');
        return response.data.filter((todo: TodoModel) => todo.id === todo_id)[0];
    }
}

