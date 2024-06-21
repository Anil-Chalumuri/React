import React, { Component } from 'react'

export default class CourseCC extends Component {
    //constructor(props) {
      //       super() 
        //     this.title = props.title 
          // }  

  render() {
    return (
        <>
        <h2 className="text-primary">Title : {this.props.title}</h2>
        <h3 style={{color:'green'}}>Fee : {this.props.fee}</h3>
        <h3 className="text-danger">Net Fee : {this.props.fee + this.props.fee * 12 / 100}</h3>

   </>
    )
  }
}
