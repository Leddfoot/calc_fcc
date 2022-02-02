import { useContext } from "react"
import DisplayContext from "../store/display-context"


const Display =()=>{

    const displayCtx = useContext(DisplayContext)
    const currentDisplayValueTop = displayCtx.displayComponentValueTop
    const currentDisplayValueBottom = displayCtx.displayComponentValueBottom

    return (
        <div className="display-container">
        <h2>{currentDisplayValueTop}</h2>
        <h2 id='display'>{currentDisplayValueBottom}</h2>
        </div>
    )
}

export default Display


