import React from 'react'


const Slide = (props) => {
  return (
    <div className='w-full'>
      <img src={props.image} className='w-full h-auto rounded-xl' alt="" />
    </div>
  )
}

export default Slide