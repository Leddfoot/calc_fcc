import React from "react";
import Button from "./Button";

//NOTE: if you are reviewing this code. The Buttons must be added as they including the ids to pass the fcc tests. I may have done this differently?
function ButtonArray() {
  return (
    <>
      <div className="button-array__container--digits">
        <Button id="one" key="one" buttonLabel="1"></Button>
        <Button id="two" key="two" buttonLabel="2"></Button>
        <Button id="three" key="three" buttonLabel="3"></Button>
        <Button id="four" key="four" buttonLabel="4"></Button>
        <Button id="five" key="five" buttonLabel="5"></Button>
        <Button id="six" key="six" buttonLabel="6"></Button>
        <Button id="seven" key="seven" buttonLabel="7"></Button>
        <Button id="eight" key="eight" buttonLabel="8"></Button>
        <Button id="nine" key="nine" buttonLabel="9"></Button>
        <Button id="equals" key="equals" buttonLabel="="></Button>
        <Button id="zero" key="zero" buttonLabel="0"></Button>
        <Button id="decimal" key="decimal" buttonLabel="."></Button>
        <Button id="clear" key="clear" buttonLabel="CLEAR"></Button>
      </div>
      <div className="button-array__container--operands">
        <Button id="add" key="add" buttonLabel="+"></Button>
        <Button id="subtract" key="subtract" buttonLabel="-"></Button>
        <Button id="multiply" key="multiply" buttonLabel="*"></Button>
        <Button id="divide" key="divide" buttonLabel="/"></Button>
      </div>
    </>
  );
}

export default ButtonArray;
