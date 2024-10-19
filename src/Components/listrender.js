import { useState } from "react"

function ListRender()
{
    const [settextval, settext] = useState("")
    const [myarrlist, setarrlist] = useState([])

    const addtext = (event)=>{     
        
        settext(event.target.value)
    }

    const add = (event)=>{
        event.preventDefault()   
        setarrlist([...myarrlist, settextval])
        settext("")
    }

    return(
        <>
            <h1>Dynamic List Rendering Task</h1>
            <form action="">
                <input style={{height:"30px", borderRadius:"5px", fontSize:"medium"}} value={settextval} onChange={addtext} type="text" placeholder="Enter to text..." />
                <br /><br />
                <button style={{height:"40px", borderRadius:"5px", fontSize:"medium"}} onClick={add}>Add</button>
                <br /><br />
                <ul >
                    {
                        myarrlist.map(function(item){
                            return(<li style={{color:"orange"}}>{item}</li>)
                        })
                    }
                </ul>
            </form>
        </>
    )
}

export default ListRender