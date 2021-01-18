import React , {useState, useContext,createContext} from 'react' ;

export const NoteContext = createContext();

export const NoteProvider = props =>{
    const [notes, setNotes]= useState([]);
    return <NoteContext.Provider value={[notes,setNotes ]}>
           {props.children}
        </NoteContext.Provider> 
    
}
// this is a hook that allows as to pull info from the data layer
export const useStateValue = () => useContext(NoteContext);
