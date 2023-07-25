import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
//this is a parent component
const ParentComponent = () => {
  //declare state variable to store messege from child
  const [messageFromChild, setMessageFromChild] = useState("");
  const name = "John Doe";
  const age = 30;
  //Callback function to receive data from the child
  const handleDataFromChild = (data) => {
    //sets the state variable  with the value of data.
    setMessageFromChild(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {messageFromChild}</p>
      <ChildComponent onData={handleDataFromChild} name={name} age={age} />
    </div>
  );
};

export default ParentComponent;
