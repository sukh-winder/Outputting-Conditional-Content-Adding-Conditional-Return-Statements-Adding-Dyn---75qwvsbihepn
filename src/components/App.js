import React, { Component, useState } from "react";
import "./../styles/App.css";
import states from "./data";
import State from "./State";


// Do not alter the states const and values inside it.


function App() {
  
  return (
    <div id="main">
      <ul>
      {states.map((state,id)=> {
        return <State state={state} id={'state'+(id+1)} key={id}/>
      }) } 
      </ul>
    </div>
  )
}

export default App;

