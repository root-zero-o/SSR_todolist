import React from 'react'
import useUpdateTodo from '../Hooks/useUpdateTodo';
import { TodoType } from '../types';
import DeleteBtn from './DeleteBtn';

const List = ({id, content, completed} : TodoType) => {

  const { mutate } = useUpdateTodo();

  const checkboxHandler = () => {
    mutate({
      id: id,
      completed: !completed
    })
  }

  return (
    <div className="card">
        { completed ? 
          (<input 
            type="checkbox" 
            className="checkbox"
            onClick={checkboxHandler} 
            defaultChecked/>
          ) 
        : (<input 
            type="checkbox" 
            className="checkbox" 
            onClick={checkboxHandler}/>
          )
        }
        <h2>{content}</h2>
        <DeleteBtn id={id}/>
    </div>
  )
}

export default List;
