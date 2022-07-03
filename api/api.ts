import apis from "./main"

export const getTodoData = async () => {
    const { data } = await apis.getTodos()
    return data
  }