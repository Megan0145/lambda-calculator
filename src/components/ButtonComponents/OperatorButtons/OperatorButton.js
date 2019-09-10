import React from "react";

const OperatorButton = (props) => {
  const operator = props.operator;
  const updateDisplay = props.updateDisplay;

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='operator-btn' onClick={evt => updateDisplay(operator)}>{operator}</button>
    </>
  );
};
export default OperatorButton;