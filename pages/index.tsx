// 홈화면 : SG를 사용해보자
import React from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useRouter } from "next/router";
import { getTodoData } from '../api/api';
import { queryKeys } from '../keys';
import UseGetTodos from '../Hooks/useGetTodos';
import { TodoType } from '../types';
import DarkMode from '../components/DarkMode';

const Index = () => {

  const router = useRouter();
  // 라우터 객체를 활용해 라우팅
  const { data } = UseGetTodos();
  const incompletedData = data?.filter((value : TodoType) => value.completed === false)

  return (
    <div className='flex flex-col p-10 items-center justify-center space-y-5 bg-ivory w-screen h-screen dark:bg-black'>
      <DarkMode/>
      <span className="font-serif text-5xl dark:text-white">TO DO LIST</span>
      <span className="font-serif text-lg dark:text-white">You have {incompletedData?.length} works to do !</span>
      <button 
        className='btn1'
        onClick={() => router.push("/todoList")}>
          <h2>GO</h2>
      </button>
    </div>
  )
}

export default Index;

export async function getStaticProps() {
  const queryClient = new QueryClient()

  

  try {
    await queryClient.prefetchQuery(queryKeys.todos, getTodoData)
    return {
      props: {
        dehydratedState : dehydrate(queryClient)
      }
    }
  }
  catch(err){
    console.log(err)
  }
}