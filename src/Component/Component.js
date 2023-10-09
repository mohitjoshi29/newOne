import React from 'react'


export default function Component(props) {
    
    var myapp=function(){
        alert("hello...")
    }
    function value(){
        // var name="mohit joshi";
        alert(props.name);
    }
    return (
    <div>
        <button onClick={myapp}>parent to chid</button>
        <br></br>
        <button onClick={value}>parent to child 1</button>
        <br></br>
        <button onClick={()=>props.fun("Hello John...")}>Child to parent data transfer...</button>
      <h1>{props.name}</h1>
      
    </div>
  )
}
