import React, {useEffect, useContext} from 'react';
import LoaderContext from "../context/loaderContext";
import MembersIllustration from "../assets/images/members.svg";
import MemberCard from '../components/MemberCard';
import ArtisticMemberOne from '../assets/members/InShot_20230520_221537759 - Chirag Joshi (1).jpg';
import ArtisticMemberTwo from "../assets/members/IMG-20230917-WA0006 - Tanisha Sinha.jpg";
import ArtisticMemberThree from "../assets/members/IMG-20221202-WA0003 - Harshita Raj (1).jpg";
import ArtisticMemberFour from "../assets/members/IMG_20230914_162907 - Harshita Bathla (1).jpg";
import ArtisticMemberFive from "../assets/members/IMG_1871 - Atika Sachdeva.jpeg";
import ArtisticMemberSix from "../assets/members/IMG_20230918_151319 - SNEHA GUPTA.jpg";
import ArtisticMemberSeven from "../assets/members/Snapchat-1487195301 - BipEEN RaNJaN (1).jpg";
import ArtisticMemberEight from "../assets/members/Screenshot_20230918_154149_WhatsApp - Shashwat Kaushik.jpg";
import ArtisticMemberNine from "../assets/members/IMG_4432 2 - Priyanka Thakurathi.jpg";

import TechnicalMemberOne from "../assets/members/photo-shivam  rai.jpg";
import TechnicalMemberTwo from "../assets/members/1683123386787.jpg";
import TechnicalMemberThree from "../assets/members/IMG_20230918_130113 - Sumit Panda.jpg";
import TechnicalMemberFour from "../assets/members/IMG_20230918_134637 - Garvit Rajput.jpg";
import TechnicalMemberFive from "../assets/members/IMG20230918151028 - Kingshuk Das.jpg";
import TechnicalMemberSix from "../assets/members/IMG_20230913_004410 - Indresh Joshi (1).jpg";
import TechnicalMemberSeven from "../assets/members/IMG_20230918_151110 - Ansh Rajput.jpg";
import TechnicalMemberEight from "../assets/members/1695028724775 - Utsav.jpg";
import TechnicalMemberNine from "../assets/members/Snapchat-1517245975 - Shruti Kushwaha.jpg";
import TechnicalMemberTen from "../assets/members/SAVE_20230918_151721 - SNEHA GUPTA.jpg";
import TechnicalMemberEleven from "../assets/members/1695031613289 - Shreshtha Arya.jpg";

const Members = () => {

  const {setProgress} = useContext(LoaderContext);

  useEffect(()=>{
    document.title = "Eco Members"
    setProgress(100);
  }, []);

  return (
    <section >
      <div className='my-16 flex justify-center items-center md:justify-around flex-wrap md:h-[90vh] md:my-0'>
        <div className='px-5 md:max-w-xl lg:max-w-2xl'>
          <h2 className='text-3xl text-center md:text-4xl lg:text-6xl font-Mooli font-extrabold text-[#023430]'>Meet Us</h2>
          <p className='my-4 text-[#374045] md:text-lg'>Are you passionate about the environment and want to be a force for positive change? Join our Environment Club and become part of a community dedicated to preserving our planet for future generations.</p>
        </div>
        <img className='w-20rem md:w-[34rem] lg:w-[40rem]' src={MembersIllustration} alt="" />
      </div>
      <div>
        <h2 className='text-center text-2xl md:text-4xl font-bold lg:text-5xl text-[#023430]'>Technical Team</h2>
        <div className='flex justify-center items-center py-28 md:py-16  px-5 gap-x-28 flex-wrap gap-y-28'>
        <MemberCard image={TechnicalMemberOne} name="Shivam Rai" branch="CSE III Year" thought="In essence, my thoughts as members of the environment club are centered on making a positive impact, promoting awareness, and working towards a more sustainable and environmentally conscious world." />
        <MemberCard image={TechnicalMemberTwo} name="Shivam Rajan" branch="CSE III Year" thought="As members of the environment club, my thoughts are deeply rooted in environmental stewardship and sustainability. We're united by a shared concern for the planet and a passion for positive change." />
        <MemberCard image={TechnicalMemberThree} name="Sumit Panda" branch="CSE III Year" thought="Eco club is not a club basically it is an opportunity for us to grow up in such a manner so that we can rise together and create a unique experience." />
        <MemberCard image={TechnicalMemberNine} name="Shruti kushwaha " branch="CSE III Year" thought="I want to contribute about the bringing the conspiracy of thoughts on betterment of the club. My work for the club would be in a betterment of any cause caused by bringing the club into new high." />
        <MemberCard image={TechnicalMemberFour} name="Garvit Raj" branch="CSE III Year" thought="Despite the challenges, my thoughts are filled with optimism. We believe that through collective action and a commitment to sustainability, we can build a better, more environmentally friendly future." />
        <MemberCard image={TechnicalMemberSeven} name="Ansh Raj Singh" branch="CSE III Year" thought="It's a great way to bring like-minded individuals together who share a passion for protecting the environment." />
        <MemberCard image={TechnicalMemberTen} name="Ashrut Gupta" branch="CSE III Year" thought="To make our environment clean and green" />
        <MemberCard image={TechnicalMemberFive} name="Kingshuk Das" branch="CSE II Year" thought="Eco clubs play a crucial role in promoting environmental awareness and sustainable practices within communities. They serve as platforms for individuals to come together and work towards a common goal of protecting the environment." />
        <MemberCard image={TechnicalMemberSix} name="Indresh Joshi" branch="CSE II Year" thought="Eco clubs are very important in educating members and the community about environmental issues, from pollution to conservation efforts." />
        <MemberCard image={TechnicalMemberEight} name="Utsav Kumar" branch="CSE I Year" thought="There is no life without nature. That underpins the crucial role that needs to be played by every human being to conserve, protect, and sustainably use the resources provided by nature, an idea envisioned in the sustainable development goals." />
        <MemberCard image={TechnicalMemberEleven} name="Shreshtha Arya" branch="CSE I Year" thought="Eco club is very good club because it work on environment and encourage people about environment." />
        </div>
      </div>
      <div className='mt-24'>
        <h2 className='text-center text-2xl md:text-4xl font-bold lg:text-5xl text-[#023430]'>Artistic Team</h2>
        <div className='flex justify-center items-center py-28 md:py-16  px-5 gap-x-28 flex-wrap gap-y-28'>
          <MemberCard image={ArtisticMemberThree} name="Harshita Raj" branch="BSC Agriculture IV Year" thought="Take care of the earth and she will take care of you." />
          <MemberCard image={ArtisticMemberOne} name="Chirag Joshi" branch="CSE III Year" thought="It's a very interesting club new and interesting things always happens here and all the members are very supporting and help in all the ways they can." />
          <MemberCard image={ArtisticMemberTwo} name="Tanisha Sinha" branch="CSE III Year" thought="I really feel glad to share that I am the member of eco club .Our only motive to arouse love and responsibility towards nature." />
          <MemberCard image={ArtisticMemberSix} name="Sneha Gupta" branch="CSE III Year" thought="We inspire students about environment and aware them about the current and popular conditions of environment." />
          <MemberCard image={ArtisticMemberEight} name="Shashwat Gaud" branch="CSE III Year" thought="Eco club is helping me to share my creativity, giving a very positive workspace vibes . I am feeling grateful that I joined this club." />
          <MemberCard image={ArtisticMemberNine} name="Priyanka Thakurathi" branch="BSC Agriculture II Year" thought="Eco club is the only environment committee of COER University and I feel proud to be a member of this committee because being a member of this committee I get encouraged to engage in activities that aim to save our environment as well as our mother earth." />
          <MemberCard image={ArtisticMemberFour} name="Harshita Bathla" branch="CSE I Year" thought="I want to participate in environmental activities and projects with a desire to help the environment." />
          <MemberCard image={ArtisticMemberSeven} name="Bipeen Ranjan" branch="CSE I Year" thought="An ECO Club is a committee that raises awareness about the environment is a commendable initiative. It play a crucial role in educating people about environmental issues, promoting sustainable practices, and fostering a sense of responsibility towards our planet." />
          <MemberCard image={ArtisticMemberFive} name="Atika Sachdeva" branch="BSC Agriculture I Year" thought="I feel really good in working as a member of ego club I want to aware people to save the Mother Earth and plant more trees " />
        </div>
      </div>
      <div className='px-5 my-12'>
        <div className='h-96 w-full bg-[#00684A] rounded-[3rem] flex justify-center items-center '>
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-Mooli font-bold text-white text-center'>We are the Eco's</h2>
            <p className='text-[#dfdfdf] my-4 text-center px-5'>As a member, you'll have the chance to actively participate in real environmental projects that have a tangible impact on our local community and beyond. From tree planting to clean-up drives, your contributions will make a difference.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Members;