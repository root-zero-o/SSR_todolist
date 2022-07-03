import React from 'react'
import { useMutation, useQueryClient } from 'react-query';
import apis from '../api/main'
import { TodoType } from '../types';

const post = async (payload : TodoType) => {
    return await apis.addTodo(payload);
}

const usePostTodo = () => {

    const queryClient = useQueryClient();

  return useMutation(post, {
    onSuccess: () => {
        alert("할 일 하나 추가요 ~")
        queryClient.invalidateQueries();
    },
    onError: () => {
        alert("할 일 추가 못했음 ㅠㅠ")
    },
    onSettled: () => {
        alert("작업 끝 ~!")
    }
  })
}

export default usePostTodo;
