import React from 'react'
import PropTypes from 'prop-types';


export default function Person(props) {
  return (
    <>
    <h1>{props.name} is {props.age}  years old !</h1>
    </>
  )
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
    };
