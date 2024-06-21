import React from 'react'

export default function Course(props) {
    function getNetFee(){
      return props.fee + props.fee * 12 / 100
    }

  return (
    <>
        <h2 className="text-primary">Title : {props.title}</h2>
        <h3 style={{color:'green'}}>Fee : {props.fee}</h3>
        <h3 className="text-danger">Net Fee : {getNetFee()}</h3>



    </>
    )
}
