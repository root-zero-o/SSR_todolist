import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import apis from '../api/main'

const update = async (id : number | undefined) => {
    return await apis.deleteTodo(id)
}

const useDeleteTodo = () => {

    const queryClient = useQueryClient();

  return useMutation(update, {
    onSuccess: () => {
        alert("삭제 완료")
        queryClient.invalidateQueries();
    },
    onError: () => {
        alert("삭제 실패 ㅠㅠ")
    },
    onSettled: () => {
        alert("작업 끝 ~!")
    }
  })
}

export default useDeleteTodo;
