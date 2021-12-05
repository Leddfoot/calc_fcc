import { createContext, useState } from "react";

const DisplayContext = createContext({
    displayComponentValueTop: '',
    displayComponentValueBottom: '',
    addDigit: () => { }
})

export function DisplayContextProvider(props) {

    const [displayValueTop, setDisplayValueTop] = useState('0')
    const [displayValueBottom, setDisplayValueBottom] = useState('0')
    const [calculationArray, setCalculationArray] = useState([])
    const [lastDigitEntered, setLastDigitEntered] = useState('')
    const [equalsHasBeenPressed, setEqualsHasBeenPressed] = useState(false)

    let digitEnteredTwoAgo
    let finalCalculationTotal

    const operators = ['+', '-', '*', '/']

    const changeTopDisplayString = (stringToAdd, operator) => {

        setDisplayValueTop((previousDisplayValue) => {
            if (previousDisplayValue === '0') {
                return stringToAdd + operator
            }

            let newTopDisplayString = ''
            //leave this as a string literal here or js will add the two values literally
            newTopDisplayString = `${previousDisplayValue}${stringToAdd}${operator}`
            return newTopDisplayString
        })
    }

    const changeBottomDisplayString = (buttonPressed) => {


        setDisplayValueBottom((previousDisplayValue) => {

            if (previousDisplayValue === '0') {
                return buttonPressed
            }

            let newBottomDisplayString = ''
            //leave this as a string literal here or js will add the two values literally
            newBottomDisplayString = `${previousDisplayValue}${buttonPressed}`
            return newBottomDisplayString

        })

    }

    const handleClear = () => {
        setDisplayValueTop('0')
        setDisplayValueBottom('0')
        setCalculationArray([])
        digitEnteredTwoAgo = 0
        setLastDigitEntered(0)
    }



    const handleButtonPress = (buttonPressed) => {
        const convertedToNumberIfPossible = Number(buttonPressed)
        const isNumber = Number.isInteger(convertedToNumberIfPossible)
        const isDecimal = (buttonPressed === '.')

        if (buttonPressed === 'CLEAR') {
            handleClear()
            return
        }

        if (operators.includes(digitEnteredTwoAgo) && lastDigitEntered === '0' && buttonPressed === '0') {
            return
        }

        if (displayValueBottom === '0' && buttonPressed === '0') {
            return
        }

        if (isDecimal) {
            if (displayValueBottom.toString().includes('.')) {
                return
            }
            changeBottomDisplayString(buttonPressed)
        }

        if (isNumber) {
            changeBottomDisplayString(buttonPressed)
        }

        if (buttonPressed === '-') {

            if (operators.includes(lastDigitEntered) || displayValueBottom === '0') {
                changeBottomDisplayString('-')
                digitEnteredTwoAgo = lastDigitEntered
                setLastDigitEntered(buttonPressed)
                return
            }
        }

        if (operators.includes(buttonPressed) && operators.includes(lastDigitEntered)) {
            calculationArray.pop()
            calculationArray.push(buttonPressed)

            setDisplayValueTop((previousDisplayValue) => {
                const reworkArray = [...previousDisplayValue]
                reworkArray.pop()
                reworkArray.push(buttonPressed)
                reworkArray.toString()
                return reworkArray
            })

            digitEnteredTwoAgo = lastDigitEntered
            setLastDigitEntered(buttonPressed)
            return
        }

        if (operators.includes(buttonPressed)) {

            if (equalsHasBeenPressed === true) {
                setCalculationArray([displayValueBottom, buttonPressed])
                setDisplayValueTop('0')
                changeTopDisplayString(displayValueBottom, buttonPressed)
                setDisplayValueBottom('0')
                digitEnteredTwoAgo = lastDigitEntered
                setLastDigitEntered(buttonPressed)
                setEqualsHasBeenPressed(false)

                return
            }

            calculationArray.push(displayValueBottom)
            calculationArray.push(buttonPressed)
            changeTopDisplayString(displayValueBottom, buttonPressed)
            setDisplayValueBottom('0')
            digitEnteredTwoAgo = lastDigitEntered
            setLastDigitEntered(buttonPressed)
        }

        if (buttonPressed === '=') {

            if (operators.includes(lastDigitEntered)) {
                alert('You must enter a number after a +,-,*, or /')
                return
            }
        }

        if (buttonPressed === '=') {
            calculationArray.push(displayValueBottom)
            changeTopDisplayString(displayValueBottom, buttonPressed)
            handleFinalCalculation()
            setEqualsHasBeenPressed(true)
        }

        digitEnteredTwoAgo = lastDigitEntered
        setLastDigitEntered(buttonPressed)
    }

    const handleFinalCalculation = () => {

        let isMultiplyorDivide = calculationArray.map(function (element) {

            return element === '*' || element === '/'
        })

        let indexOfContainsMultiplyOrDivide = isMultiplyorDivide.indexOf(true)

        do {
            const firstNumber = Number((calculationArray[indexOfContainsMultiplyOrDivide - 1]))
            const secondNumber = Number((calculationArray[indexOfContainsMultiplyOrDivide + 1]))
            const operator = calculationArray[indexOfContainsMultiplyOrDivide]
            let finalTotal
            let startingPoint

            switch (operator) {
                case '*':
                    finalTotal = firstNumber * secondNumber
                    startingPoint = indexOfContainsMultiplyOrDivide - 1
                    calculationArray.splice(startingPoint, 3, finalTotal)
                    break
                case '/':
                    finalTotal = firstNumber / secondNumber
                    startingPoint = indexOfContainsMultiplyOrDivide - 1
                    calculationArray.splice(startingPoint, 3, finalTotal)
                    break
                default:
                    indexOfContainsMultiplyOrDivide = -1
            }
        } while (indexOfContainsMultiplyOrDivide !== -1);



        if (calculationArray.length === 1) {
            setDisplayValueBottom(Number(calculationArray[0]))
            return
        }

        do {
            const firstNumber = Number((calculationArray[0]))
            const secondNumber = Number((calculationArray[2]))
            const operator = calculationArray[1]
            let finalTotal
            switch (operator) {
                case '+':
                    finalTotal = firstNumber + secondNumber
                    calculationArray.splice(0, 3, finalTotal)
                    finalCalculationTotal = finalTotal

                    break;
                case '-':
                    finalTotal = firstNumber - secondNumber
                    calculationArray.splice(0, 3, finalTotal)
                    finalCalculationTotal = finalTotal
                    break;
                default:
                    break;
            }


        } while (calculationArray.length > 1);

        setDisplayValueBottom(finalCalculationTotal)
    }



    const context = {
        displayComponentValueTop: displayValueTop,
        displayComponentValueBottom: displayValueBottom,
        addDigit: handleButtonPress,
    }

    return <DisplayContext.Provider value={context}>
        {props.children}
    </DisplayContext.Provider>
}

export default DisplayContext

