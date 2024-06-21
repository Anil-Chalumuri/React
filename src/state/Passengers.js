import React, {useState} from 'react'

function AddPassenger( {addPassenger}) {
    var [passenger, setPassenger]= useState({ name :'', mobile:''})

    function submitProcess(e) {
        e.preventDefault();  // cancels form submission
        addPassenger(passenger)
    }
    function updateValue(e){
        setPassenger( { ...passenger, [e.target.name]: e.target.value})
    }

    function clearFields(e) {
       e.preventDefault()
       setPassenger({name:'', mobile :''})
    }
 
    return(
      <>
       <h3>Add Passenger</h3>
       <form onSubmit={submitProcess}>
         Name : <input required type="text" name="name" value={passenger.name}
                      onChange={updateValue} />*
         Mobile : <input pattern='\d*' required type="text" name="mobile" value={passenger.mobile}  
                      onChange={updateValue} />*
         <p></p>
         <button>Add</button>
         <button onClick={clearFields}>Clear</button> 
       </form>
      </>
    )
}

function ListPassengers({passengers}) {
  return(
    <>
      <h2>Passengers List</h2>
      <table className="table table-bordered">
         <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th></th>
         </tr>
         {
          passengers.map( (p, idx) => 
             <tr key={idx}>
              <td>{p.name}</td>
              <td>{p.mobile}</td>
              <td>
                <button className="btn btn-primary">Delete</button>
              </td>
             </tr>
          )
         }
      </table>
    </>
  )
}

export default function Passengers() {
  var [passengers, setPassengers]   = useState([])

  function addNewPassenger(passenger) {
      setPassengers( [...passengers, passenger])
  }
  return (
    <>
     <AddPassenger addPassenger= {addNewPassenger} />
     <ListPassengers passengers={passengers} />
    </>

  )
}