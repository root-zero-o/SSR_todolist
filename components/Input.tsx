import React, { useState } from 'react'
import usePostTodo from '../Hooks/usePostTodo';

const Input = () => {

    const [input, setInput] = useState("");
    const { mutate } = usePostTodo();

    const inputHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const submitHandler = () => {
        mutate({
            content: input,
            completed: false
        })
    }

  return (
    <form>
        <input 
          type="text" 
          className="main-input"
          placeholder="Write your plan"
          onChange={inputHandler}/>
        <button 
            type="submit" 
            className="btn1"
            onClick={submitHandler}>
                <h2>Submit</h2>
        </button>
    </form>
  )
}

export default Input;
