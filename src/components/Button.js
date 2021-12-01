import { useContext } from "react"
import DisplayContext from "../store/display-context"


const Button = (props) => {
    // console.log('props: ', props.buttonLabel);

    const displayCtx = useContext(DisplayContext)

    function testContext() {
        const buttonPressed = props.buttonLabel
        displayCtx.addDigit(buttonPressed)
    }

///you are accesiing the add digit or whatever function on the context objext

    return (
        <button key={props.id} id={props.id} onClick={testContext}>{props.buttonLabel}</button>
    )
}

export default Button


    // const [displayValue, setDisplayValue] = useState('rrr')
    // const changeDisplayValue =()=>{
    //     const currentDisplayValue = displayValue
    //     const newDisplayValue = currentDisplayValue + 'z'

    //     console.log(newDisplayValue)
    //     setDisplayValue(newDisplayValue)
    // }