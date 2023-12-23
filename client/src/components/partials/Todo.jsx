import React from 'react'
import moment from 'moment';
import { deleteTodoApi } from '../../services/api';
import {ToastContainer, toast} from "react-toastify";
import { unstable_useViewTransitionState } from 'react-router-dom';


export default function Todo({todo, setRefreshList}) {

  const handleDelete = async() => {
    const result=await deleteTodoApi({
      todo_id:todo._id
    })

    if(result.data.status===200){
      setRefreshList(new Date())
      toast('Deleted')
    }else{
      toast('Failed to delete, please try again')
    }
  }
  

  return (
    <div className='col-sm-3 mx-3 my-2 alert bg-light'>
        <div className="card-header">
            {todo.isCompleted ? 'Completed': 'Not Completed'}
        </div>
        <div className='card-body'>
            <h4 className='card-title'>{todo.desc}</h4>
            <p className='card-text'>{moment(todo.date).fromNow()}</p>

        </div>

        <div className="actionButtons" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div className="deleteButtons">
                <button style={{background: 'red'}} onClick={handleDelete}>Delete</button>
              </div>
              <div className="markTodo">
                <button style={{background: 'lightgreen'}}> {todo.isCompleted ? 'Mark InCompleted' : 'Mark Complete'} </button>
              </div>
            </div>
      
    </div>
  )
}
