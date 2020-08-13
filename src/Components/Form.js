import React, { useState, useContext} from 'react';
import NotesContext from '../context/notes-context';

const Form = ()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { dispatch } = useContext(NotesContext);

    const addNote = (e) => {
        e.preventDefault()
        dispatch({type:'ADD_NOTE', title, body})
        // setNotes([
        //   ...notes,
        //   {title,body},
          
        // ])
        setTitle('');
        setBody('');
      }

    return (
        <>     
        <h3>Add Note</h3>
        <form onSubmit={addNote}>
          <div>
            <h5>Title</h5>
            <input type="text" value={title}
            onChange={(e)=>{setTitle(e.target.value)}}/>
          </div>
          <div>
            <textarea 
            value={body}
              onChange={(e)=>{setBody(e.target.value)}}
            ></textarea>
          </div>
        <button>ADD</button>
        </form>
      </>
    )
}
export default Form;