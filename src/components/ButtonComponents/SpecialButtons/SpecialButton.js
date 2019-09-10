import React from "react";

const SpecialButton = (props) => {
  const special = props.special;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
      className='special-btn'  
      onClick={ 
        evt => {
        if(special==='C'){
          props.clearDisplay();
          } 
      } 
      }
      >
      {special}
      </button>
    </>
  );
};
export default SpecialButton;