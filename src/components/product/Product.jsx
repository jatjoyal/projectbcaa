import React, { useState } from 'react'
import './Product.css'
const Product = () => {
    const [id,setid] =useState('');
const [nme,setnme] =useState('');
const [qty,setqty] =useState('');
const [prs,setprs] =useState('');


const readproductid =(event) =>{
    setid(event.target.value)
    
   }
   const readproductname =(event) =>{
       setnme(event.target.value)
       
   }
const readproductqty =(event) =>{
    setqty(event.target.value)
    
   }
   const readproductprice =(event) =>{
       setprs(event.target.value)
       
   }
   
   



  return (
    <div>
      <h1 className='i'>PRODUCT PAGE</h1>
      PRODUCT ID <input type="text" onChange={readproductid} /> <br/>
       PRODUCT NAME<input type="text" onChange={readproductname} /><br/>
       PRODUCT qty<input type="text" onChange={readproductqty} /><br/>
       PRODUCT price<input type="text" onChange={readproductprice} /><br/>
       <button type="submit">LOG IN</button>
      
      
      

    </div>
  )
}

export default Product
