// 홈화면 : SG를 사용해보자
import React from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useRouter } from "next/router";
import { TodoType } from "../types";
import apis from '../api/main';
import { queryKeys } from '../keys';
import UseGetTodos from '../Hooks/useGetTodos';

//https://velog.io/@hhhminme/Next.js%EC%97%90%EC%84%9C-Axios%EB%A5%BC-%ED%86%B5%ED%95%B4-getStaticProps%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90feat.-typescirpt

type Props = {
  todoData : TodoType[];
}

const Index = () => {

  const router = useRouter();
  const { data } = UseGetTodos();
  console.log(data)

  // 라우터 객체를 활용해 라우팅

  return (
    <div className='flex flex-col items-center justify-center space-y-5'>
      <span className="font-serif text-5xl">TO DO LIST</span>
      <span className="font-serif text-lg ">You have {data?.length} works to do !</span>
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

  const getTodoData = async () => {
    const { data } = await apis.getTodos()
    return data
  }

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