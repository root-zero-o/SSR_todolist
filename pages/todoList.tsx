import React from 'react'
import ListContainer from '../components/ListContainer';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { queryKeys } from '../keys';
import { getTodoData } from '../api/api';
import Input from '../components/Input';


const TodoList = () => {


  return (
    <div className="container">
      <div className="flex flex-col mt-8">
        <h1>TO DO LIST</h1>
        <h2>with SSR  & React Query !</h2>
      </div>
      <Input/>
      <h2>Plans</h2>
      <ListContainer/>
    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async () => {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKeys.todos, getTodoData)

  return {
      props : {
          dehydratedState: dehydrate(queryClient)
      }
  }
}

export default TodoList;
