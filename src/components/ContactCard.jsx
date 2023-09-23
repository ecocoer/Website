import React from 'react';
import WhatsAppIcon from "../assets/icons/WhatsApp.svg";

const ContactCard = (props) => {
  return (
    <div className='contact-bg p-5 w-72 h-64 flex flex-col justify-between items-center rounded-xl lg:hover:translate-y-[-8px] lg:hover:shadow-lg duration-300 border border-[#c6c6c6]'>
      <img className='w-28 h-28 rounded-full' src={props.image} alt="" />
      <div className='flex justify-center items-center flex-col'>
          <p className='font-semibold'>{props.name}</p>
          <div className='flex justify-start items-center gap-x-1'>
            <img className='h-8' src={WhatsAppIcon} alt="" />
            <p className='my-2'>{props.number}</p>
          </div>
          <div className='flex justify-start items-center gap-x-1'>
            <img src="" alt="" />
            <p className='text-sm '>{props.email}</p>
          </div>
      </div>
    </div>
  )
}

export default ContactCard;