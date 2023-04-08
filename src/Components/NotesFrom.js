import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addnote } from '../action/stopAction';
import { useNavigate } from 'react-router-dom';
import './NotesFrom.css';


export default function NotesFrom() {

  let [title, setTitle] = useState('')
  let [content, setContent] = useState('')

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmission(e) {
    e.preventDefault()//it uses for not refresh enter page
    dispatch(addnote(title, content))
    setTitle('')
    setContent('')
    navigate('/AllNotes')
  }
  return (
    <div className='box-container'>

      <form onSubmit={handleSubmission} className='notefrom'>
       
        <div className="twelve">
        <h3>Add Notes</h3>
        </div>
        

        <div className="inputbox">
          <input type="text" required="required" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <span>Title</span>
        </div>
        <div class="inputbox">
          <input type="text" required="required" name='content' rows="5" value={content} style={{ height: '60px' }} onChange={(e) => setContent(e.target.value)} />
          <span>Description</span>
        </div>
        <div className='inputbox' style={{ marginTop: '80px' }}>
        
          <button className="button-92" role="button" type='submit'>Add Notes</button>
          <button className="button-73" role="button" type='submit' style={{margin:'50px 0 0 400px'}} onClick={() => navigate('/AllNotes')}>My Notes</button>
        </div>
      </form>
    </div>
  )
}   
