import React from "react";

const Header = (props) => {
    // console.log(props);
    console.log(props.photu);
    
    return (
        // <div>
        //     <h1>Username is {props.a} </h1>
        // </div>
        <div className='mr-7' bg-white>
            <img src="props.photu" alt="" />
            <h1>{props.username}</h1>
            <h4>{props.prof}</h4>
            <h2>{props.city}, {props.age}</h2>
            <button>Add Friend</button>
        </div>
    );
};    
export default Header;