import React,{useState} from 'react'


export default function Counter() {
    var [counter,setCounter] = useState(0)

    function increment(){
        setCounter(counter +1)
        console.log(counter)
    }
    function decrement(){
        if(counter < 1)
            setCounter(counter) 
        else
            setCounter(counter -1)
    }
    function ResetCount(){
        counter=0
        setCounter(counter) 
    }

  return (
    <>
    <h1>Counter</h1>
    <h2>{counter}</h2>
    <button onClick ={increment}>Inc</button>
    <button onClick = {decrement}>Dec</button>
    <button onClick = {ResetCount}>Reset</button>
    </>
  )
}
