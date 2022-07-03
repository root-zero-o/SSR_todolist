import { useQuery } from "react-query";
import apis from '../api/main';
import { queryKeys } from "../keys";

const UseGetTodos = () => {

  const fetcher = async () => {
    const { data } = await apis.getTodos();
    return data;
  }

  return useQuery(queryKeys.todos, fetcher)
}

export default UseGetTodos;