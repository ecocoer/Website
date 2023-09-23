import React, {useEffect, useContext} from 'react';
import LoaderContext from "../context/loaderContext";
import ContactCard from '../components/ContactCard';
import TechnicalMemberOne from "../assets/members/photo-shivam  rai.jpg";
import TechnicalMemberTwo from "../assets/members/1683123386787.jpg";
import TechnicalMemberThree from "../assets/members/IMG_20230918_130113 - Sumit Panda.jpg";
import TechnicalMemberFive from "../assets/images/IMG_20230227_171208 - Skull Rockers.png";
import TechnicalMemberSix from "../assets/images/WhatsApp Image 2023-09-14 at 16.07.57.jpg";


const Contact = () => {

  const {setProgress} = useContext(LoaderContext);

  useEffect(()=>{
    document.title = "We're Here to Help"
    setProgress(100);
  }, []);

  return (
    <section className='py-16 px-5'>
      <h2 className='text-2xl text-center md:text-3xl lg:text-5xl font-Mooli font-extrabold text-[#023430]'>Questions ?</h2>
      <h1 className='py-8 text-3xl text-center md:text-4xl lg:text-6xl font-Poppins font-extrabold text-[#00684A]'>Contact Us</h1>
      <div className='max-w-3xl mx-auto'>
          <p className='text-center text-[#5d6c74] text-lg'>Your green ideas, questions, and passion for a sustainable future are the seeds of change. Contact us and let's nurture a greener world together.</p>
        <div className='flex flex-wrap justify-center items-center gap-x-16 gap-y-8 my-24'>
            <ContactCard image = {TechnicalMemberTwo} name="Shivam Rajan" email="shivamrajan217@gmail.com" number = "9122356285"/>
            <ContactCard image = {TechnicalMemberOne} name="Shivam Rai" email="shivamrai6836@gmail.com" number = "9557657500"/>
            <ContactCard image = {TechnicalMemberThree} name="Sumit Panda" email="sumitpanda623@gmail.com" number = "9777429709"/>
            <ContactCard image = {TechnicalMemberFive} name="Saiyam Tuteja" email="saiyamtuteja2@gmail.com" number = "7505835347"/>
            <ContactCard image = {TechnicalMemberSix} name="Himanshu Mishra" email="hm086161@gmail.com" number = "6206606907"/>
        </div>
      </div>
    </section>
  )
}

export default Contact;