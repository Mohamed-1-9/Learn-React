/* eslint-disable react/prop-types */

import { useState } from 'react'
import './App.css'

function App() {
  let [Items,setItems] = useState([ {id : 1 , describtion :  "bag" , packed : true , count : 1 } , 
  {id : 2 , describtion : "Socks" , packed : false , count : 2}
  ])
  return <>
    <Logo/>
    <Form setItems={setItems} />
    <List Items={Items} />
    <Footer Items={Items} />
  </>
}
function Logo(){
  return <h1>Far Away 🏖</h1>
}

function Form({setItems}){


  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  // ...arr =>  1,2,3,4,5,6,7,8,9,10...
  
  let [inputValue , setInputValue] = useState("")
  
  let [Option , setOption] = useState(1)
  function handleSubmit(){
    // setItems( (oldValue) => oldValue.push() )


    let newItem ={id:  Math.random()  , describtion  : inputValue , packed : false , count : Option }
    setItems( oldValue => [...oldValue , newItem] )
    
    // console.log(Items);
    
  }
  return <div className='form'>
    <span>What do you need for the trip ❤ ?</span>
    <select value={Option} onChange={ (e)=> { setOption(e.target.value) }}>
      {arr.map( num => <option value={num} key={num} >{num}</option> )  }
    {/* <option value="1">1</option> */}
    </select>
    <input type="text" onChange={(e)=> setInputValue(e.target.value) }  value={inputValue} placeholder='item...' />
    <button onClick={handleSubmit} >Add</button>
  </div>
}



function List({Items}){
  return <div className='list' >
    
    {Items.map( (item) => { return <Item item={item} Items={Items} key={item.id} /> } )}
    
    
  </div>
}


function Item({item}){

return <div  style={ !item.packed ? {} : {textDecoration : "line-through" } } className="item"> {item.count} {item.describtion} <span  className='delete'>❌</span></div>
}
function Footer({Items}){
  return <div className='footer'>You have {Items.length} of items <span className='percentage'> 66% are Packed </span> </div>
}
export default App
