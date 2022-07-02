// 쿼리 키 : 배열 키 사용

export const queryKeys = {
    todos : ['todos'] as const,
    todoById: (todoId : number) => ["todos", todoId] as const,
};

// 사용방법
// useQuery(queryKeys.todo, fetchTodos);
// useQuery(queryKeys.todoById(todoId),() => fetchTodoById(todoId))