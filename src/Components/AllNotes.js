import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import './AllNotes.css';
import UpdateNote from './UpdateNote';
import Noteslist from './Noteslist';

export default function AllNotes() {

   
    const navigate = useNavigate()
    const notes = useSelector((state) => state.notes)
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        console.log(searchQuery);
    };

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filteredNotes);

    const handleSearchFormSubmit = (event) => {
        event.preventDefault();
      };
  


    return (
        <>


            <div className='notes-container'>

                <div class="box">
                    <button class="button-73" style={{ borderRadius: '10px', width: '200px', margin: '30px' }} onClick={() => navigate('/')}>HomePage</button>
                    <form name="search" onSubmit={handleSearchFormSubmit}>
                        <input type="text" style={{ margin: '30px' }} class="input" name="txt" onmouseout="this.value = ''; this.blur();" value={searchQuery} onChange={handleSearchInputChange} placeholder='Search your notes' />
                    </form>
                    <i class="fas fa-search"></i>

                </div>

                {
                    filteredNotes.map((note, index) => {
                        return (
                            <>
                                <div key={index}>

                                </div>

                                <div>
                                    <div class="ag-format-container">
                                        <div class="ag-courses_box">
                                            <div class="ag-courses_item">
                                                <div class="ag-courses-item_link">
                                                    {/* <div class="ag-courses-item_bg"></div> */}

                                                    {note.edit ? (
                                                        <UpdateNote note={note} index={index}/>
                                                    ):(
                                                      <Noteslist index={index} note={note}/>
                                                    )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </>
                        )

                    })
                }

            </div>
        </>
    )

}