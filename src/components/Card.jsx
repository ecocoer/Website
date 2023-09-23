import React from 'react'

const Card = (props) => {
  return (
    <div className='h-[32rem] w-80 bg-[#ececec] rounded-lg flex flex-col justify-center'>
      <img src={props.image} className='h-2/3' alt="" />
      <h2 className='px-4 text-lg font-semibold text-[#1DB954]'>{props.title}</h2>
      <p className='px-4 text-sm'>{props.description}</p>
    </div>
  )
}

export default Card;