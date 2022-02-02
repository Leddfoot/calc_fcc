import { useContext } from "react"
import DisplayContext from "../store/display-context"


const Button = (props) => {

    const displayCtx = useContext(DisplayContext)

    function enterInput() {
        const buttonPressed = props.buttonLabel
        displayCtx.addDigit(buttonPressed)
    }

    return (
        <button key={props.id} id={props.id} onClick={enterInput} className="button">{props.buttonLabel} </button>
    )
}

export default Button
