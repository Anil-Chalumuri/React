import React  from 'react'

export default class CounterCC extends React.Component {

  constructor() {
    super()
    this.state = { counter: 0 }
    // Bind this as object to be used with this reference 
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrement() {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <>
        <h1>Counter</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
      </>
    )
  } // render 
} // component 