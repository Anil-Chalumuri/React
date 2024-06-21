import React from 'react'

export default function BooksList(props) {
  return (
    <>
    <h1>Books</h1>
    {
        props.books.map( (book,idx) => 
           <div key ={idx}>
             <h3 className="text-primary">{book.title}</h3>
             <h4 className="text-danger">{book.price}</h4>
             <hr/>

           </div>

        
        )
    }
    </>
  )
}
