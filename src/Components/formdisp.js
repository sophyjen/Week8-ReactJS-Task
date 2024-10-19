import { useState } from "react"

function FormCaptureDisplay()
{
    const [textval, settextval]=useState("")

    const textchange = (event)=>{
        settextval(event.target.value)
    }

    return(
        <div style={{textAlign:"center"}}>
        <h1>Form - Capture & Display</h1>
            <form action="">
                <input style={{height:"50px", borderRadius:"5px", fontSize:"medium"}} value={textval} onChange={textchange} type="text"  />
            </form>
            <h2 style={{color:"blue", fontSize:"50px"}}>{textval}</h2>
        </div>
    )
}

export default FormCaptureDisplay