import React from 'react'


export default function GreetUser(props) {
    console.log(props)
    var ct = new Date() 
    var hours = ct.getHours()
    let msg = "Good Evening"
  
    if(hours < 12)
       msg = "Good Morning"
    else
       if (hours < 17)
         msg = "Good Afternoon"
    
  
    return (
      <h1>{msg} {props.name}</h1>
    )
  }