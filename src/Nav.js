import React, {useContext} from 'react';
import {NoteContext} from './NoteContext';

const Nav =() => {

    const [notes, setNotes]= useContext(NoteContext);

    
    return ( 
        <div className="nav__app"> 
       <nav > 
          <h3> My Notes</h3>
          <p>List of Notes: {notes.length} </p>  
      </nav>
      </div> 
    );
};

export default Nav;