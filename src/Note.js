import React, { useState, useEffect,useContext} from "react";
import './Note.css'
import {NoteContext} from './NoteContext';
import {db} from './firebase';

const Note = () => {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [loader, setLoader] = useState(false);

  const[notes, setNotes]= useContext(NoteContext);

  useEffect(()=>{
      db.collection('Notes').onSnapshot(snapshot => {
          setNotes(snapshot.docs.map(doc => doc.data()))
      })
  }, [])

  const addNote =e =>{
    e.preventDefault();
    setNotes(prevNotes => [...prevNotes, {name:name, category:category , description:description}]); //ben kopje te notes 

    setLoader(true);

    db.collection("Notes")
      .add({
        name: name,
        category: category,
        description: description,
      })
      .then(() => {
        setLoader(false);
        alert("Your note has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setCategory("");
    setDescription("");

}

  return (
    <form className="form" onSubmit={addNote}>
      <h1>ADD A NOTE 🤳</h1>

      <label>Note</label>
      <input
        placeholder="Note"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br/>
      
       <label >Category</label> 
            <select name='category' value={category} onChange={(e) => setCategory(e.target.value)} >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
        </select> <br/>

      <label >Description</label>
      <textarea 
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Note;