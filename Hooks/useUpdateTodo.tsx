import apis from '../api/main'
import { useMutation, useQueryClient } from "react-query";
import { TodoType } from '../types';
import { queryKeys } from '../keys';

const update = async ( payload : TodoType) => {
    return await apis.updateTodo(payload)
}

const useUpdateTodo = () => {

    const queryClient = useQueryClient();

  return useMutation(update, {
    onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.todos);
        alert("업데이트됨")
    },
    onError: () => {
        alert("업데이트 안됨 ㅠㅠ")
    },
    onSettled: () => {
        alert("작업 끝!")
    }
  })

}

export default useUpdateTodo;
