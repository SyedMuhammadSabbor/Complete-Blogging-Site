import React from 'react'
import './DropDown.css'
export default function DropDown({ labelName, options , value , enter, handleChange }) {
  return (
    <div className="con">
      <label className='in'>{labelName}</label>
      <select className='ons'     
      name={enter}
        type={enter}
        value={value}
        onChange={handleChange}>
        {options.map((option, index) => (
          <option  key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
