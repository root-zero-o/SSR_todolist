import { TodoType } from "../types";
import { AxiosResponse } from "axios";
import api from "./core/index";

const apis = {
    getTodos : () => api.get("/todos"),
}

export default apis;