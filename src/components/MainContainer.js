import Display from "./Display"
import Button from "./Button"

const MainContainer =()=>{


return (
    <>
    <h1>bullshit placeholders</h1>
    <a href="https://freecodecamp-solutions.github.io/Build-a-JavaScript-Calculator/">should function like the example here</a>
    <h4> Only negative will be allowed when the first operator has been pressed. May not pass the tests if you use only button disabling so leave the decimal disabling in place but also disable buttons (decimal and operator) at certain points</h4>
    <h4>If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).</h4>
    <Display />
    <Button id='zero' key='zero' buttonLabel='0'></Button>
    <Button id='one' key='one' buttonLabel='1'></Button>
    <Button id='two' key='two' buttonLabel='2'></Button>
    <Button id='three' key='three' buttonLabel='3'></Button>
    <Button id='four' key='four' buttonLabel='4'></Button>
    <Button id='five' key='five' buttonLabel='5'></Button>
    <Button id='six' key='six' buttonLabel='6'></Button>
    <Button id='seven' key='seven' buttonLabel='7'></Button>
    <Button id='eight' key='eight' buttonLabel='8'></Button>
    <Button id='nine'  key='nine' buttonLabel='9'></Button>
    <Button id='equals'  key='equals' buttonLabel='='></Button>
    <Button id='decimal'  key='decimal' buttonLabel='.'></Button>
    <Button id='clear'  key='clear' buttonLabel='CLEAR'></Button>
    <Button id='add'  key='add' buttonLabel='+'></Button>
    <Button id='subtract'  key='subtract' buttonLabel='-'></Button>
    <Button id='multiply'  key='multiply' buttonLabel='*'></Button>
    <Button id='divide'  key='divide' buttonLabel='/'></Button>
    
    </>
    
)
}

export default MainContainer