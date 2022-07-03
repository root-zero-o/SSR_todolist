import React from 'react'
import UseGetTodos from '../Hooks/useGetTodos';
import { TodoType } from '../types';
import List from './List';

const ListContainer = () => {

    const { data } = UseGetTodos();


  return (
    <div className="flex flex-col">
        { data.map((value : TodoType, index : number) => (
            <List
                key={index}
                content={value.content}
                completed={value.completed}/>
        ))}
        
    </div>
  )
}

export default ListContainer;

//https://stackoverflow.com/questions/64136025/nextjs-getserversideprops-not-working-into-components