import React from 'react'
import { useDispatch } from 'react-redux'
import { delectNote, editNote } from '../action/stopAction';

export default function Noteslist(props) {
    const dispatch = useDispatch();
    const dispatch2 = useDispatch();
    return (
        <div >
            
                            <div class="ag-courses-item_bg"></div>
                            <h5 className="ag-courses-item_title">{props.note.title}</h5>
                            <p className="ag-courses-item_title" style={{ fontSize: '20px', color: 'white' }}>{props.note.content}</p>

                            <button className='button-73' onClick={() => dispatch(delectNote(props.index))}>Delete</button>
                            <button className='button-73' onClick={() => dispatch2(editNote(props.index))} style={{ marginLeft: '20px' }}>Update</button>
                        </div>
       
                                

  )
}
