import React from 'react'
import UseGetTodos from '../Hooks/useGetTodos';
import { TodoType } from '../types';
import DarkMode from './DarkMode';
import List from './List';

const ListContainer = () => {

    const { data } = UseGetTodos();

  return (
    <div className="flex flex-col">
        <DarkMode/>
        { data.map((value : TodoType, index : number) => (
            <List
                key={index}
                id={value.id}
                content={value.content}
                completed={value.completed}/>
        ))}
    </div>
  )
}

export default ListContainer;

