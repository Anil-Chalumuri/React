import React from 'react'

export default function Greet() {
  
  var ct = new Date()
  var hour = ct.getHours()  
  let msg = "Good Evening"

  if(hour <12)
    msg = "Good Morning"
  else
    if(hour <17)
      msg = "Good Afternoon"
  
    return (
    <h1>{msg}</h1>
  )
}
