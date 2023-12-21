import React from 'react'
import Header from './partials/Header'
import Todo from './partials/Todo'
import AddTodoModal from './partials/AddTodoModal'

function Home() {
  return (
    <div>
       <Header/>
       <div className="container">
        <div className="row justify-content-md-center mt-4">
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/>

        </div>
       </div>
       <div className='' style={{position: 'fixed', right: 50, bottom: 50, zIndex: 1030}}>
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-outline-light'>
          Add
        </button>
       </div>
       <AddTodoModal/>
    </div>
  )
}

export default Home
