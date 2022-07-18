import React, {useEffect, useState} from "react";
import '../css/Note.css';
import Note from './Note';
import CreateNote from './CreateNote';
import { v4 as uuid } from 'uuid';



function Notes() {

    const [savedNotes] = useState(localStorage.getItem('Notes'))
    const  [notes, setNotes] = useState(savedNotes ? JSON.parse(savedNotes) : []
    )

    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes))
    }, [notes]);
    const [inputText, setInputText] = useState('');

    const textHandler = (e) => {
        setInputText(e.target.value);
    }

    const saveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: inputText,
            },
        ]);

        setInputText('');
    }
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id)
        setNotes(filteredNotes)
    }

    return (
        <div className='notes'>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    deleteNote={deleteNote}
                />
            ))}
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText}
            />
        </div>
    )
}

export default Notes;