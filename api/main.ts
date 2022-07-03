import { TodoType } from "../types";
import api from "./core/index";

const apis = {
    getTodos : () => api.get("/todos"),
    updateTodo: (payload : TodoType) => api.patch(`/todos/${payload.id}`, payload),
    addTodo : (payload : TodoType) => api.post("/todos", payload),
    deleteTodo : (id : number | undefined) => api.delete(`/todos/${id}`)
}

export default apis;