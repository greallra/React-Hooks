import React, { useState, useEffect, useReducer } from 'react';
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import Form from './Form';
import NotesContext from '../context/notes-context';

export const NoteApp = (props)=>{
    //state setting used state is being replaced by useReducer(for complex state)
    // const [notes, setNotes] = useState([]);
    //using notesReducer to change state and dispatch to change it
    const [notes, dispatch] = useReducer(notesReducer, [])

    //run once
    useEffect(()=>{
      const notesData = JSON.parse(localStorage.getItem('notes'));
      if(notesData) {
        //setNotes(notesData);
        dispatch({type:'POPULATE_NOTES', notes: notesData})
      }
    },[])
  
    useEffect(()=>{
      localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])
  
    return (
      <NotesContext.Provider value={{
          notes,
          dispatch
      }}> 
      {/* can give everything access to value */}
        <h1>Notes</h1>
        <NoteList />
   
        <Form />
      </NotesContext.Provider>
    )
  }

  export default NoteApp;