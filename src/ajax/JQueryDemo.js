import React, { useState } from 'react'
import $ from 'jquery'

export default function JQueryDemo() {
    const [now, setNow] = useState('')

    function getDateTime() {
        var timezone = document.getElementById("txtTimezone").value
        $.ajax(
           'http://worldtimeapi.org/api/timezone/' + timezone,
           {
             success:(data) =>  setNow(data.datetime),
             error: 
                () =>{ 
                    setNow(''); // clear output 
                    alert("Sorry! Invalid Timezone!")
                }
           }
        )
    }



    return (
        <>
            <h2>AJAX with jQuery</h2>
            <h1>{now}</h1>
            TimeZone : <input type="text" id="txtTimezone" />
            <p></p>
            <button onClick={getDateTime}>Get DateTime</button>


        </>
    )
}