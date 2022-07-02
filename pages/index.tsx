// 홈화면 : SG를 사용해보자
import React from 'react'
import { useRouter } from "next/router";
import { TodoType } from "../types";
import apis from '../api/main';

type Props = {
  todoData : TodoType[];
}

const Index = ({todoData} : Props) => {

  const router = useRouter();

  // 라우터 객체를 활용해 라우팅

  return (
    <div className='flex flex-col items-center justify-center space-y-5'>
      <span className="font-serif text-5xl">TO DO LIST</span>
      <span className="font-serif text-lg ">You have {todoData?.length} works to do !</span>
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
  try {
    const { data } = await apis.getTodos();
    return {
      props: {
        todoData : data
      }
    }
  }
  catch(err){
    console.log(err)
  }
}
