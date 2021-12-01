// import { useState, useEffect } from "react";

// const Display =()=>{

    
//   const [displayValue, setDisplayValue] = useState(0)

//         useEffect(() => {
//         console.log(`Ydv is   ${displayValue} times`);
//     }, [displayValue]);
//     return (
//         <div id='display'>
//         {displayValue}
//         <button onClick={() => setDisplayValue(displayValue + 1)}>Click me</button>
//         <hr />
//         </div>
//     )
// }
//**********************************************


// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Your Name"
//         />
//         <p>{name}</p>
//       </form>
//     </div>
//   )
// }

// import { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`You have clicked the first button ${count} times`);
//   }, [count]);

//   const [count2, setCount2] = useState(0);

//   useEffect(() => {
//     console.log(`You have clicked the second button ${count2} times`)
//   }, [count2]);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <button onClick={() => setCount2(count2 + 1)}>Click me</button>
//     </div>
//   );
// }