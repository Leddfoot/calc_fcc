import { createContext, useState } from "react";

const DisplayContext = createContext({
    displayComponentValueTop: '',
    displayComponentValueBottom: '',
    addDigit: () => { }
})

export function DisplayContextProvider(props) {

    const [displayValueTop, setDisplayValueTop] = useState('0')
    const [displayValueBottom, setDisplayValueBottom] = useState('0')

    const [lastDigitEntered, setLastDigitEntered] = useState('')
    const [digitEnteredTwoAgo, setDigitEnteredTwoAgo] = useState('')
    let [calculationArray, setCalculationArray] = useState([])
    let [topNumberStringBuilder, setTopNumberStringBuilder] = useState('')
    let [bottomNumberStringBuilder, setBottomNumberStringBuilder] = useState('')
    let [finalCalculationString, setFinalCalculationString] = useState('')


    const operators = ['+', '-', '*', '/']

    const changeTopDisplayString = (buttonPressed, isNumber, isOperator, isDecimal, isTwoConsecutiveOperators) => {

        if (isTwoConsecutiveOperators) {
            calculationArray.pop()
            calculationArray.push(buttonPressed)
            // setCalculationArray = [calculationArray += buttonPressed]

            let temporaryArray = [...finalCalculationString]
            temporaryArray.pop()
            temporaryArray.push(buttonPressed)

            finalCalculationString = temporaryArray.join('')
            temporaryArray = []

            setDisplayValueTop(finalCalculationString)


            console.log('finalCalculationString: ', finalCalculationString);


            console.log('calculationArray: ', calculationArray);
            return
        }

        if (isDecimal) {
            setTopNumberStringBuilder(topNumberStringBuilder + buttonPressed)
        }

        if (isNumber) {
            setTopNumberStringBuilder(topNumberStringBuilder + (buttonPressed))
        }

        let numbers = Number(topNumberStringBuilder)

        if (isOperator) {
            setFinalCalculationString(finalCalculationString += numbers)
            setFinalCalculationString(finalCalculationString += buttonPressed)
            setTopNumberStringBuilder('')
            console.log('finalCalculationString: ', finalCalculationString);
        }

        setDisplayValueTop((previousDisplayValue) => {
            if (previousDisplayValue === '0') {
                return buttonPressed
            }

            let newTopDisplayString = ''
            //leave this as a string literal here or js will add the two values literally
            newTopDisplayString = `${previousDisplayValue}${buttonPressed}`
            return newTopDisplayString
        })

        setDigitEnteredTwoAgo(lastDigitEntered)
        setLastDigitEntered(buttonPressed)

        // setCalculationArray = [calculationArray += buttonPressed]
        // console.log('calculationArray: ', calculationArray);


    }

    const changeBottomDisplayString = (buttonPressed, isNumber, isOperator, isDecimal) => {

        if (isDecimal) {
            setBottomNumberStringBuilder(bottomNumberStringBuilder + buttonPressed)
        }
        if (isNumber) {
            console.log('buttonPressed: ', buttonPressed);
            console.log('bottomNumberBuilderString: ', bottomNumberStringBuilder);
            setBottomNumberStringBuilder(bottomNumberStringBuilder + (buttonPressed))
        }

        if (isOperator) {
            let stringConvertedToNumber = Number(displayValueBottom)

            stringConvertedToNumber = Number(displayValueBottom)
            calculationArray.push(stringConvertedToNumber)
            calculationArray.push(buttonPressed)

            console.log('calculationArray: ', calculationArray);
            setBottomNumberStringBuilder(0)
        }

        if (isOperator) {
            setDisplayValueBottom(() => {
                return '0'

            })
            return
        }

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
        setDigitEnteredTwoAgo('')
        setTopNumberStringBuilder('')

    }

    const handleFinalCalculation = () => {
        let stringConvertedToNumber = Number(displayValueBottom)

        stringConvertedToNumber = Number(displayValueBottom)
        calculationArray.push(stringConvertedToNumber)

        setDisplayValueBottom('0')

        let isMultiplyorDivide = calculationArray.map(function (element) {

            return element === '*' || element === '/'
        })

        let indexOfContainsMultiplyOrDivide = isMultiplyorDivide.indexOf(true)


        do {
            const firstNumber = (calculationArray[indexOfContainsMultiplyOrDivide - 1])
            const secondNumber = (calculationArray[indexOfContainsMultiplyOrDivide + 1])
            const operator = calculationArray[indexOfContainsMultiplyOrDivide]
            let finalTotal
            let startingPoint

            console.log('in dwo while')

            switch (operator) {
                case '*':
                    finalTotal = firstNumber * secondNumber
                    startingPoint = indexOfContainsMultiplyOrDivide - 1
                    calculationArray.splice(startingPoint, 3, finalTotal)
                    console.log('calculationArrayafter calculation: ', calculationArray);
                    break
                case '/':
                    finalTotal = firstNumber / secondNumber
                    startingPoint = indexOfContainsMultiplyOrDivide - 1
                    calculationArray.splice(startingPoint, 3, finalTotal)
                    console.log('calculationArrayafter calculation', calculationArray);
                    break
                default:
                    indexOfContainsMultiplyOrDivide = -1
            }
        } while (indexOfContainsMultiplyOrDivide !== -1);


        do {
                console.log('indwohile')
                const firstNumber = (calculationArray[0])
                const secondNumber = (calculationArray[2])
                const operator = calculationArray[1]
                let finalTotal
                switch (operator) {
                    case '+':
                        finalTotal = firstNumber + secondNumber
                        calculationArray.splice(0, 3, finalTotal)
                        break;
                    case '-':
                        finalTotal = firstNumber - secondNumber
                        calculationArray.splice(0, 3, finalTotal)
                        break;
                
                    default:
                        break;
                }


            } while (calculationArray.length > 1);


            console.log('calculationArray.lengthfffff: ', calculationArray.length);
            console.log('calculationArray: ', calculationArray);

            let finalTotal = Number(calculationArray)
            console.log('finalTotal: ', finalTotal);


        }

const handleButtonPress = (buttonPressed) => {
            const convertedToNumberIfPossible = Number(buttonPressed)
            const isNumber = Number.isInteger(convertedToNumberIfPossible)
            const isDecimal = (buttonPressed === '.')
            const isEquals = (buttonPressed === '=')
            let isOperator = false

            if (operators.includes(digitEnteredTwoAgo) && lastDigitEntered === '0' && buttonPressed === '0') {
                return
            }

            if (buttonPressed === 'CLEAR') {
                handleClear()
                return
            }

            ///are now getting errror when decimal is pressed displayValueBottom.includes() is fucking up

            if (displayValueTop === '0' && buttonPressed === '0') {
                return
            }

            if (isDecimal) {
                console.log('displayValueBottom: ', displayValueBottom);
                if (displayValueBottom.includes('.')) {
                    return
                }

                changeTopDisplayString(buttonPressed, false, false, true)
                changeBottomDisplayString(buttonPressed, false, false, true)
            }

            if (buttonPressed === '=') {
                console.log('was equal sign')

                if (operators.includes(lastDigitEntered)) {
                    alert('You must enter a number after a +,-,*, or /')
                }
                handleFinalCalculation(buttonPressed)
                return
            }

            if (isNumber) {
                changeTopDisplayString(convertedToNumberIfPossible, true, false, false)
                changeBottomDisplayString(convertedToNumberIfPossible, true, false, false)
                console.log('convertedToNumberIfPossible: ', convertedToNumberIfPossible);
            }

            if (buttonPressed === '-') {
                console.log('buttonPressedis a minus: ', buttonPressed);
                console.log('lde is......', lastDigitEntered)

                if (operators.includes(lastDigitEntered)) {
                    changeTopDisplayString('-', true, false, false)
                    changeBottomDisplayString('-', true, false, false)
                    isOperator = false
                    return
                }
            }

            if (operators.includes(buttonPressed)) {


                if (operators.includes(lastDigitEntered)) {
                    changeTopDisplayString(buttonPressed, true, false, false, true)
                } else {
                    console.log('lastDigitEntered: ', lastDigitEntered);
                    isOperator = true
                    changeTopDisplayString(buttonPressed, false, true, false)
                    changeBottomDisplayString(buttonPressed, false, true, false)

                }


            }





        }

        const context = {
            displayComponentValueTop: displayValueTop,
            displayComponentValueBottom: displayValueBottom,
            addDigit: handleButtonPress,
            lastDigitEntered: ''
        }

        return <DisplayContext.Provider value={context}>
            {props.children}
        </DisplayContext.Provider>
    }

    export default DisplayContext

