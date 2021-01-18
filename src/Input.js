import React,{useState} from 'react';


const Input =({name, category ,description}) => {
    return( 
        <div> 
          <h3><i>{name}</i></h3>
         <h4> {category}</h4> 
         <h4> {description}</h4><br/>
      </div>
    );
}

export default Input;