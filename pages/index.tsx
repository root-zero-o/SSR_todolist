import React from 'react'

const Index = () => {
  return (
    <div className="container">
      <div className="flex flex-col mt-8">
        <h1>TO DO LIST</h1>
        <h2>with SSR, React Query & Redux toolkit !</h2>
      </div>
      <form>
        <input 
          type="text" 
          className="main-input"
          placeholder="Write your plan"/>
        <button type="submit" className="btn1"><h2>Go</h2></button>
      </form>
      <div className="flex flex-col">
        <h2>Plans</h2>
        <div className="card">
          <input type="checkbox" className="checkbox"/>
          <h2>Go to work</h2>
          <button className="btn1"><h2>Delete</h2></button>
        </div>
        <div className="card">
          <input type="checkbox" className="checkbox"/>
          <h2>Study SSR</h2>
          <button className="btn1"><h2>Delete</h2></button>
        </div>
      </div>
    </div>
  )
}

export default Index;