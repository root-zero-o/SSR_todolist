import React from 'react'
import ListContainer from '../components/ListContainer';
import apis from '../api/main';
import { GetServerSideProps } from 'next';
import { Props } from '../types';


const TodoList = ({todoData} : Props) => {

  console.log(todoData)
  return (
    <div className="container">
      <div className="flex flex-col mt-8">
        <h1>TO DO LIST</h1>
        <h2>with SSR  & React Query !</h2>
      </div>
      <form>
        <input 
          type="text" 
          className="main-input"
          placeholder="Write your plan"/>
        <button type="submit" className="btn1"><h2>Submit</h2></button>
      </form>
      <h2>Plans</h2>
      <ListContainer todoData={todoData}/>
    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async () => {

  const { data } = await apis.getTodos()

  return {
      props : {
          todoData : data
      }
  }
}

export default TodoList;
