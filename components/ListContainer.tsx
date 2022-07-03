import React from 'react'
import { Props } from '../types';
import List from './List';

const ListContainer = ({todoData} : Props ) => {

  return (
    <div className="flex flex-col">
        { todoData.map((value, index) => (
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