import React , {useEffect, useState} from "react";
// import Header from "./Header";
// import { useFormStatus } from "react-dom";
// import React, { useState } from 'react'
import axios from "axios";

const App = () => {
  // const a = 10
  // const age = 100z
  //  let user = "sarthak"
  // const abc = () => 
  //  const [num, setNum] = useState(0) 
  // const [username, setUsername] = useState('')
  // const submitHandler = (e) =>{
  //   e.preventDefault()
  //   console.log(username);
  //   setUsername('')
  // }
  // const num = 10

    {
  // console.log("Hello");
  // const changeUser = () => {
  //   console.log(user)   
  //   user = "Aryan"
  //   console.log(user);
  }
  // const users = [
  //   {
  //     "name": "Rohit Sharma",
  //     "city": "Mumbai",
  //     "age": 32,
  //     "profession": "softwre Engineer"
  //   },
  //   {
  //     "name": "Rohit Sharma",
  //     "city": "Mumbai",
  //     "age": 32,
  //     "profession": "softwre Engineer"
  //   } 
  // ]
  const [data, setData] = useState([])
  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    // const data = response.data
    setData(response.data)
    // console.log(data);
    
    // console.log(response);
    
  } 
  useEffect(() => {
    getData()
  }, []) 
      
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
      {/* <div>
        <h3>Number is {num}</h3>
        <button onClick={()=>setNum(num+10)}>Increment</button>
        <button onClick={()=>setNum(num-10)}>Decrement</button>
      </div>   */}
      {/* <div> */}
        {/* <h3 className='text-10xl bg-pink-700 text-black'>HELLO guys</h3>
        <h3>Hello</h3> */}
        {/* <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input 
          value={username}
          onChange={(e)=>{
            setUsername(e.target.value)
          }}
          type="text" 
          placeholder='Enter your name'
          />
          <button>SUbmit</button>
        </form>
      </div> */}
      {/* <div>
        <h1>Heloo</h1>
      </div> */}
      {/* <Header/>
       <nav>
         <h2>Sheryians</h2>
         <div>
           <h4>About</h4>
           <h4>Contact</h4>
         <h4>share</h4>
         </div>
       </nav> */}
      {/* <div>
        <Header a={num} />
        <Header a = 'sam'/>
      </div> */}
      {/* <div>
        <div>
          {users.map(function(elem,idx){
            return <Header key={idx} username={elem.name} age={elem.age} prof={elem.profession} city={elem.city} photu={elem.city} photu={elem.photu}/>
          })}
        </div>
      </div> */}
      <div>
        <button onClick={getData} className=''>Get Data</button>
        <div>
          {data.map(function(elem, idx){
            return <div key={idx} className="">
              <img src="elem.dowlaod_url" alt=""/>
              <h1>{elem.author}</h1>
            </div>
          })}
        </div>
      </div>

    </>
  );
};

export default App;