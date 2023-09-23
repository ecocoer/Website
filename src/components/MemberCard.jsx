import React from 'react';

const MemberCard = (props) => {
  return (
    <div className='flex-col w-full md:flex-row max-w-2xl px-8 py-12 flex items-center md:h-80 md:w-[32rem] rounded-lg bg-gradient-to-r from-[#fcce6c] via-[#fa909d]  to-[#ff65c5]'>
        <img className='w-full mt-[-100px] mb-10 md:mb-0 md:mt-0 max-w-[256px] h-64 object-cover md:ml-[-80px] md:mr-10 rounded-lg' src={props.image} alt="" />
        <div>
          <h4 className='font-Mooli text-xl font-semibold text-black'>{props.name}</h4>
          <h5 className='mb-3 text-lg font-Mooli text-[#252525]'>{props.branch}</h5>
          <p className='font-Mooli text-[#252525]'>{props.thought}</p>
        </div>
    </div>
  )
}

export default MemberCard