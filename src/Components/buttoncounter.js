import { useState } from "react"

function ButtonCounter()
{
    const [counter, setcount] = useState(0)

    const counterinc =()=>
    {
    setcount(counter+1)
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Button Counter Task</h1>
            <h2 style={{color:"blue", fontSize:"50px"}}>{counter}</h2>
            <button style={{height:"50px", borderRadius:"5px", fontSize:"medium"}} onClick={counterinc}>Counter Increment</button>
        </div>
    )
}r̥

export default ButtonCounter