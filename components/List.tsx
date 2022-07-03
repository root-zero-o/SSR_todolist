import React from 'react'
import { TodoType } from '../types';

const List = ({content, completed} : TodoType) => {
  return (
    <div className="card">
        <input type="checkbox" className="checkbox"/>
        <h2>{content}</h2>
        <button className="btn1"><h2>Delete</h2></button>
    </div>
  )
}

export default List;
