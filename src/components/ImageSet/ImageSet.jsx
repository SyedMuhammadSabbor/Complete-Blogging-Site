import React from 'react'
import './ImageSet.css'

export default function ImageSet(props) {
  return (
    <>
        <div className='adj'>
            <div className="back">

            </div>
            <div className='image-position'>
                <img src={props.Image} alt="" />
            </div>
        </div>
      
    </>
  )
}
