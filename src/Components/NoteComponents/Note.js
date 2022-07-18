import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function Note({ id, text, deleteNote }) {
    return (
        <div className='note'>
            <div className='note__body'>{text}</div>
            <div className='note__footer' style={{ justifyContent: "flex-end" }}>
                <DeleteForeverIcon
                    className='note__delete'
                    onClick={() => deleteNote(id)}
                    aria-hidden='true'
                    />
            </div>
        </div>
    )
}
export default Note;