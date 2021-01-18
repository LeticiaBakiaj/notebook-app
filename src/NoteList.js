import React, {useContext} from 'react';
import Input from './Input';
import {NoteContext} from './NoteContext';


const NoteList = () => {
   
    const [notes, setNotes]= useContext(NoteContext);

    return( 
        <div className='list'> 
        {notes.map(note => (
            <Input name={note.name} category={note.category} description={note.description}/>  
            
        ))}

      </div>
    );
}

export default NoteList;

