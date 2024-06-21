import React from 'react'
export default function Discount() {

function showDiscount() {
    var txtPrice = document.getElementById("txtPrice")
    var price = txtPrice.value 
    let discount;

    if(price > 10000)
       discount = price * 20  / 100;
    else
       discount = price * 10 / 100;

    document.getElementById("discount").innerHTML  = discount;
}

return (
  <>
  <h3>Discount Calculation</h3>
  Price : <input type="number" id="txtPrice" />
  <p></p>
  <button onClick={showDiscount}>Discount</button>
  <p></p>
  <h4 id="discount"></h4>
  </>
)
}