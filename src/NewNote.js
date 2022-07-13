import React, { useState, useEffect } from "react";
import './NewNote.css';

const NewNote = () => {

    const [value, setValue] = useState('');

    useEffect(() => {
        return () => {

        }
    })

    return (
        <div className="container">
            <div className='noteContainer'>
                <form>
                    <input type='text' id='noteCategory' placeholder='Category' />
                    <br />
                    <input type='text' id='noteTitle' placeholder='Title' />
                    <br />
                    <textarea id='noteText' placeholder='Text'></textarea>
                    <button className='btn createNewNote' onClick={() => setValue('')}>New</button>
                    <button className='btn deleteNote'>Delete</button>
                    <button className='btn saveNote'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default NewNote;