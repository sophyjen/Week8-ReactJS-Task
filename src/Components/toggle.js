import { useState } from "react"

function ToggleVisibility()
{
    const [flag, setflag] = useState(true)
    const toggle = ()=>
    {
        setflag(!flag)
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Toggle Visibility Task</h1>
            {flag?<h2 style={{color:"greenyellow", fontSize:"50px"}}>Welcome to EMC</h2>:""}
            <button style={{height:"50px", borderRadius:"5px", fontSize:"medium"}} onClick={toggle}>Toggle - Visibile/Hide</button>
        </div>        
    )
}

export default ToggleVisibility