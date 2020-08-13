import React, { useState, useEffect, useReducer } from 'react';
import { render } from 'react-dom';

const noteReducer = (state, action) => {
  switch(action.type) {
      case 'POPULATE_NOTES':
      return state
      default:
      return state
  }
}

export const NoteApp = (props)=>{

  // const [notes, setNotes] = useState([]);
  const [state, dispatch] = useReducer(notesReducer, [])
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = (e) => {
    e.preventDefault()
    // setNotes([
    //   ...notes,
    //   {title,body},
      
    // ])
    setTitle('');
    setBody('');
  }
  const removeNote = (title)=>{
    // setNotes(notes.filter((note)=> note.title !==title))
  }

  //run once
  useEffect(()=>{
    const notesData = JSON.parse(localStorage.getItem('notes'));
    if(notesData) {
      setNotes(notesData);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note)=>(
        <Note key={note.title} note={note} removeNote={removeNote}/>
        
      ))}
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <input type="text" value={title}
        onChange={(e)=>{setTitle(e.target.value)}}

        />
        <textarea 
           onChange={(e)=>{setBody(e.target.value)}}
        ></textarea>
        <button>ADD</button>
        
      </form>
    </div>
  )
}
const Note = ({note, removeNote})=>{

  useEffect(()=>{
    console.log("child efefct");
    //cleeanup
    return ()=>{
      console.log("cleanign");
    }
  },[])

  return (<div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={()=>{removeNote(note.title)}}>X</button>
        </div>
)
  }


 const Count = ()=>{
  const [count, setCount] = useState(0);
   //runs once after mount and on update of state or props
   //we need to specify the things we want to run (second arg)
   useEffect(()=>{
     console.log('test');
     document.title = count
   }, [count])

   //make it run only once, provide empty array
   useEffect(()=>{
     console.log("only run once");
   },[])

   return <div>
<button onClick={()=>{setCount(count - 1)}}>-</button>
  <button>{count}</button>
<button onClick={()=>{setCount(count + 1)}}>+</button>

   </div>
 }