/* eslint-disable react/prop-types */ 
// don't worry about that

import { useState } from 'react'
import './App.css'

function App() {
  let [Items,setItems] = useState([])
  return <>
    <Logo/>
    <Form setItems={setItems} />
    <List Items={Items } setItems={setItems}  />
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
    // setItems( (oldValue) => oldValue.push() ) => bec. push function add on the same addres so the react don't want 
    // this it wants new value


    let newItem ={id:  Math.random()  , describtion  : inputValue , packed : false , count : Option }
    setItems( oldValue => [...oldValue , newItem] )
    setInputValue("")
    setOption(1)
    
    
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



function List({Items,setItems}){
  return <div className='list' >
    
    {Items.map( (item) => { return <Item item={item} setItems={setItems} Items={Items} key={item.id} /> } )}
    
    
  </div>
}


function Item({item,Items,setItems}){

  function onDelete(id){

  let newarr=  Items.filter( (element) =>  element.id !== id   ) // return array
  setItems(newarr)

  }

  function onPacked(id){

    setItems( items.map( (item) => {

      if ( item.id == id ){
        return {...item, packed : !item.packed }
      }else{
        return item;
      }
    } ) )

  }



return (<div   className="item">
  <input type="checkbox" value={item.packed} onClick={()=> onPacked(item.id)} />
  <span style={ !item.packed ? {} : {textDecoration : "line-through" } }> {item.count} {item.describtion}</span> 
   <button onClick={ ()=>{onDelete(item.id)} }  className='delete'>❌</button>
   </div>)
  
}

function Footer({Items}){
  let 
  // let pers = / items.length * 100

  return <div className='footer'>You have {Items.length} of items <span className='percentage'>   are Packed </span> </div>
}
export default App
