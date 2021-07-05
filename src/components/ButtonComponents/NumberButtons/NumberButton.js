import React from "react";

const NumberButton = (props) => {
  const number = props.number; 
  const id = props.id;
  const updateDisplay = props.updateDisplay;

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
        className='num-btn' 
        id={'num'+id} 
        onClick={ 
          evt => updateDisplay(number)
        }> 
          {number}
      </button>
      
    </>
  );
};
export default NumberButton;