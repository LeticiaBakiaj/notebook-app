import React, {useState, useEffect} from 'react';
import './App.css';
import Fuse from 'fuse.js';
import notes from './notes';
import Note from './Note';
import Nav from './Nav';
import {NoteProvider} from './NoteContext';
import Input from './Input';
import NoteList from './NoteList';


function App() {
  
const[note, setNote] =useState('');



  {/*
  //retrive data

function Input(){
  let ref=db.database().ref('notes');
  ref.on('notes', gotData);
}

  function gotData(data){
    let info =data.val(); //loop and get the values
    let keys=Object.keys(info);

    for (let i=0; i<keys.length; i++){
      let infoData=keys[i];
      let name=info[infoData].name;
      let category=info[infoData].category;

      console.log(name,category);

      let infosResults = document.querySelector('.infosResults');
    
    }
  }
*/}




 {/* useEffect(() => {
    db.collection('Notes')
    .get()
    .then( snapshot => {
      const note = []
      snapshot.forEach(doc =>{
        const data =doc.data()
        note.push(data)
      })
      this.setState({note:note})
  })

  }, [note])*/}

  


const fuse = new Fuse (notes, {
  keys:[
    'name',
    'category',
    'description'
  ],
  
  includeScore: true
})

const results = fuse.search(note);
const notesResults = note ? results.map(result => result.item) : notes ;

function handleOnSearch( { currentTarget = {} }) {
    const {value} = currentTarget;
    setNote (value);
}

  return (
    <>

      <header className="App-header">
          
        <div className="container">
          <NoteProvider>
             <Note/>
             <Nav/>
             <Input/>
             <NoteList/>
          </NoteProvider> 
        </div>

      </header>
      <main className="container">
       
       <ul className="characters">
          {notesResults.map(notes => {
            const { name, category,description} = notes;
          

            return (
              <li key={name} className="character">
                <ul >
                  <li>
                    <strong>Note:</strong> { name }
                  </li>
                  <li>
                    <strong>Category:</strong> { category }
                  </li>
                  <li>
                    <strong>Description:</strong> { description }
                  </li>
                </ul>
              </li> 
            )
          })
        }
       </ul>
        <aside>
          <form className="search">
            <label>Search</label>
            <input type="text" value={note} onChange={handleOnSearch} />  
        </form>
        </aside>
      </main>
    </>
  );
}

export default App;