

import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { updateNote } from '../action/stopAction';
import "./UpdateNote.css";


export default function UpdateNote(props) {
  const dispatch = useDispatch();
  let getTitle=useRef("")
  let getMessage=useRef("")
  function handleUpdate(e){
    e.preventDefault();
    const newTitle=getTitle.value
    const newMessage=getMessage.value
    const data={
      newTitle,
      newMessage,
    }
    dispatch(updateNote(props.index,data))
  }
  return (
    <>
    <form onSubmit={handleUpdate}>
    <div className="form2">
          <input type="text" required="required" name='title' ref={(input)=>(getTitle=input)}
      defaultValue={props.note.title} className='fillbox' style={{width:'200px', height:"30px",marginBottom:'20px',marginLeft:'-20px'}}/>
          
        </div>
        <div class="inputbox">
          {/* <input type="text" required="required" name='content' rows="5" style={{ height: '60px', fontSize:'20px',width:"1000px"}} className='fillbox' ref={(input)=>(getMessage=input)} defaultValue={props.note.content} /> */}
          <textarea
            required
            className="fillbox"
            rows="5"
            cols="28"
            ref={(input) => (getMessage = input)}
            defaultValue={props.note.content}
            style={{ height: '60px', fontSize:'20px',width:"1000px"}}
          />
        </div>
        
      
      <button className='button-73'>Update</button>
    </form>
    </>
  )
}

