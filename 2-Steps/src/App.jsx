
import { useState } from 'react';
import './App.css'

function App() {
  
  let messages =[
     "Hello! I'm Mohamed",
     "I'm Front-end developer",
     "Join me to success"
  ]
  // when i said there is a value will change so i need a state
  let [step,setStep] = useState(0) // return array
  // array => have 2 elements (the first is the value) (the second is a function who change the value) 
  // let step = 1;
  function next(){

    // step += 1 // you can not do that
    if (step < 2) {
      // setStep( step + 1 )//0.1s
      setStep( ( oldValue )=>  oldValue + 1   )//0.1s

    }

      // if the thing that i want to do in one line i don't need the curly bractes {}

    // if i want to make a change depend on the old/current value you should use callback function
    

  }  
  function prev(){
    // step -=1
     if(step > 0) setStep(step - 1)

  }

  return (
    <>
    <div className="container">
        <div className="numbers">
          <p className={ step >= 0 ? "active" : "" }>1</p>
          <p className={ step >= 1 ? "active" : "" }>2</p>
          <p className={ step >= 2 ? "active" : "" }>3</p>
        </div>
        <div className="message">
          <p> {step + 1} : {messages[step]} </p>
        </div>
        <div className="buttons">
          <button onClick={prev} >Prev</button>
          <button onClick={next} >Next</button>
        </div>
    </div>
    </>
  )
}

export default App
