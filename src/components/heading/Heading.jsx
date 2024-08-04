import React from 'react'
import './Heading.css'
export default function Heading(props) {
  return (
    <>
        <div className="firstline">
            <div>
            <h2>{props.statement}</h2>
            <div className="underline"></div>

            </div>
              <span>{props.option}</span>
            </div>
    </>
  )
}
