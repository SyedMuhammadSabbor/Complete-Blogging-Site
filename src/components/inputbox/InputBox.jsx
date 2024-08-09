import React from 'react';
import './InputBox.css'
export default function InputBox({ labelName, enter, value, handleChange ,placeholder }) {
  return (
    <>
    <div className="con">
      
    <label className='in'>{labelName}:</label>
      <input required  className='on'
      placeholder={placeholder}
        name={enter}
        type={enter}
        value={value}
        onChange={handleChange}
      />
    </div>
    </>
  );
}
