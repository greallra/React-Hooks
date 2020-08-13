import React, { useContext, useState, useEffect } from 'react';
import NotesContext from '../context/notes-context';
// import useMousePosition from '../customHooks/useMousePosition';


const Note = ({note})=>{
    const { dispatch } = useContext(NotesContext)
    // const position = useMousePosition()

    return (<div key={note.title}>
        <h3>Title</h3>
        <div>{note.title}</div>
        <p>{note.body}</p>
        {/* <p>{position.x}</p>
        <p>{position.y}</p> */}
        <button onClick={()=>{dispatch({type:'REMOVE_NOTE', title: note.title})}}>X</button>
      </div>
)
}
export default Note;