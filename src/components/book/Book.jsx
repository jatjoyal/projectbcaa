import React, { useState } from 'react'
import './Book.css'
const Book = () => {
    const [id,setid] =useState('');
const [nme,setnme] =useState('');
const [auth,setauth] =useState('');
const [prs,setprs] =useState('');


const readbookid =(event) =>{
    setid(event.target.value)
    console.log(event.target.value);
   }
   const readbooknme =(event) =>{
       setnme(event.target.value)
       console.log(event.target.value);
   }
   
const readbookauth =(event) =>{
    setauth(event.target.value)
    console.log(event.target.value);
   }
   const readbookprs =(event) =>{
       setprs(event.target.value)
       console.log(event.target.value);
   }
   
  return (
    <div>
      <h1 className='t'>BOOK DETAILS</h1>
      Book id<input type="text" onChange={readbookid} /> <br/>
       Book name<input type="text" onChange={readbooknme} /><br/>
       Book author<input type="text" onChange={readbookauth} /><br/>
       Book price<input type="text" onChange={readbookprs} /><br/>
       <button type="submit">SUBMIT</button>
      
    </div>
  )
}

export default Book
