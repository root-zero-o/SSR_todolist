import React from 'react'
import useDeleteTodo from '../Hooks/useDeleteTodo';
import { TodoType } from '../types';

const DeleteBtn = ({id} : TodoType) => {

    const { mutate } = useDeleteTodo();

    const btnHandler = () => {
        mutate(id)
    }

  return (
    <button className="btn1" onClick={btnHandler}>
        <h2>Delete</h2>
    </button>
  )
}

export default DeleteBtn;
