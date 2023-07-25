import React from "react";

//This is the child component
// receives props as parameters from the parent component.
const ChildComponent = ({ onData, name, age }) => {
  const handleClick = () => {
    // Simulating data sent from the child to the parent
    const dataToSend = "Hello from the Child!";
    onData(dataToSend); // Calling the callback function with data
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={handleClick}>Send Message to Parent</button>
    </div>
  );
};

export default ChildComponent;
