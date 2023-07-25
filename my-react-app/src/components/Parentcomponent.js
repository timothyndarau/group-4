import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import '../App.css';
//this is a parent component

const ParentComponent = () => {
  //declare state variable to store messege from child
  const [messageFromChild, setMessageFromChild] = useState("");
  const name = "John Doe";
  const age = 30;
  //Callback function to receive data from the child
  const handleDataFromChild = (data) => {
    //sets the state variable  with the value of data from the child component 
    setMessageFromChild(data);
  };

  return (
    <div className="parent-container">
      <h1 className="parent-heading">Parent Component</h1>
      <p className="parent-message">Message from Child: {messageFromChild}</p>
      <ChildComponent onData={handleDataFromChild} name={name} age={age} />
    </div>
  );
};

export default ParentComponent;
