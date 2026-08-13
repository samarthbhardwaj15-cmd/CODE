import React from "react";
import { useFormStatus } from "react-dom";
import React, {useState} from 'react'

const App = () => {
  // const a = 10
  // const age = 100
  //  let user = "sarthak"
  // const abc = () => 
    {
  // console.log("Hello");
  const [num, setNum] = useState(0)
  

  // const changeUser = () => {
  //   console.log(user)   
  //   user = "Aryan"
  //   console.log(user);
    
    
  } 
      
  return (
    <>
      {/* <h1>Hello Samarth {a}</h1>
      <h2>Hello 2</h2> */}
      {/* <div>Hello {user}, {age}</div> */}
      {/* <div>
        <h1>Username is{user}</h1>
        {/* <button onClick={abc}>Change User</button> */}
        {/* <button onClick={changeUser}>Change User</button>
      // </div> */}
      <div>
        <h3>Number is</h3>
        <button onClick={()=>setNum(num+10)}>Increment</button>
        <button onClick={()=>setNum(num-10)}>Decrement</button>
      </div>  



    </>
  );
};

export default App;